module.exports = function (param) {
  let paid = parseInt(param.body.itemTypeId);
  if(paid == 0){
    return {
      'success': 'string',
      'errorCode': 'string',
      'msg': '',
      'data|1-4': [
        {
          'id': '@string("number",2)',
          'itemName': '@csentence(5)'
        }
      ]
    }
  }
}
