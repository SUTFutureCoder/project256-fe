/**
 * 接口字典
 */
export const HTTP_BASE = 'http://127.0.0.1:3000/'
// export const HTTP_BASE = 'https://project256.com/api/'

// 主页
export const API_INDEX              = HTTP_BASE + 'index'                   //主页

//文章系列
export const API_ESSAY_INFO         = HTTP_BASE + 'essay/info'              //文章详情
export const API_ESSAY_WRITE        = HTTP_BASE + 'essay/write'             //文章添加
export const API_ESSAY_LIST         = HTTP_BASE + 'essay/list'              //文章列表

// 心愿
export const API_WISH_MAKE          = HTTP_BASE + 'wish/make'
export const API_WISH_LIST          = HTTP_BASE + 'wish/list'

// feed
export const API_FEED               = HTTP_BASE + 'feed/'

//验证码系列
export const API_GET_IMG_CAPTCHA    = HTTP_BASE + 'platform/GetImgCaptcha?'    //获取图片验证码
export const API_GET_VOICE_CAPTCHA  = HTTP_BASE + 'platform/GetVoiceCaptcha?'  //获取语音验证码
export const API_SEND_PHONE_CAPTCHA = HTTP_BASE + 'platform/SendPhoneCaptcha'  //发送手机验证码
