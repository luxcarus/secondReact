export default class Http {
  constructor(options){
    this.async = options.async || true,
    this.method = options.method || null,
    this.url = options.url || null,
    this.whenSuccess = options.whenSuccess || function(){},
    this. whenError = options.whenError || function(){}
  }
  request(){}
  put(){}
  delete(){}
  get(){}
  post(){}
}