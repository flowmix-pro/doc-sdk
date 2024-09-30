interface FlowmixDocxProps {
    // 挂载的元素
    hold: string;
    // 配置工具栏隐藏的工具列表
    toolBars?: string[];
    // 编辑器默认主题
    theme?: 'light' | 'dark';
    // 是否展示文档大纲, 默认展示
    outline?: boolean;
    // 配置请求的token参数
    token?: string;
    // 文档数据获取接口, GET
    getDocApi?: string;
    // 文档数据保存/更新接口, PUT
    saveDocApi?: string;
    // 文件/资源上传接口, POST
    uploadApi?: string;
    // ai文生文接口
    ai2TextApi?: string;
    // 获取在线白板数据接口
    getBoardApi?: string;
    // 在线白板数据保存接口
    saveBoardApi?: string;
    // doc解析接口
    parseDocApi?: string;
    // 图片ocr识别接口
    ocrApi?: string;
    // sdk 地址, 默认不对外暴露
    sdkPath?: string;
    // 基础服务的url地址
    baseurl? : string;
}

/**
 * 1. 先考虑单向数据传输
 * 2. 通过postmessage实现双向数据通信
 * 
 **/

class FlowmixDocx {
    props: FlowmixDocxProps;
    container: any;
    iframe: any;
    constructor(props: FlowmixDocxProps) {
        this.props = Object.assign({
            hold: '',
            toolBars: true,
            theme: 'light',
            outline: true,
            token: '',
            getDocApi: '',
            saveDocApi: '',
            uploadApi: '',
            ai2TextApi: '',
            getBoardApi: '',
            saveBoardApi: '',
            parseDocApi: '',
            ocrApi: '',
            sdkPath: 'http://flowmix.turntip.cn/docx-vue'
        }, props);

        // 设置挂载容器样式
        this.container = document.querySelector(this.props.hold) as any;
        if (!this.container) {
            throw new Error('请传入正确的挂载容器');
        }
        this.container.style.position = 'relative';
        // 创建文档
        this.createDoc();
    }

    createIframe(urlObj: any) {
        let iframe = document.createElement('iframe');
        iframe.src = urlObj;
        iframe.allow = 'fullscreen';
        iframe.style.border = 'none';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        return iframe;
    }

    createDoc() {
        // 创建iframe
        this.iframe = this.createIframe(`${this.props.sdkPath}?s=flowmix&${this.props2ParamsStr(this.props)}`);
        this.container.append(this.iframe);
    }

    props2ParamsStr(opt: any, whiteList = ['sdkPath', 'hold']) {
        let params = '';
        for(let key in opt) {
            if (!whiteList.includes(key)) {
                params += key + '=' + encodeURI(opt[key]) + '&'
            }
        }
        return params.slice(0, params.length -1)
    }
    // 重载sdk
    reload() {
        this.iframe.src = this.iframe.src + `?t=${Date.now()}`;
    }
    // 销毁sdk
    destory() { 
        // 清空容器的子元素
        this.container.innerHTML = '';
    }
}


export default FlowmixDocx;

