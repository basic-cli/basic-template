module.exports = [
    {
        type:'input',
        name:'projectname',
        message:'projectname',
        default:'<%=projectname%>'
    },
    {
      type:'confirm',
      name:'private',
      message:'this resgistery is private?'
  },

  {
      type:'input',
      name:'author',
      message:'author'
  },
  {
      type:'input',
      name:'description',
      message:'description'
  },
  {
      type:'input',
      name:'license',
      message:'license'
  },
  // 系统配置
    {
        type:'input',
        name:'systemName',
        message:'systemName[系统中文名称]:'
    },
    {
        type:'input',
        name:'abbreviation',
        message:'abbreviation[系统简称]:'
    }
]