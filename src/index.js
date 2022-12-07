const axios = require('axios')
const https=require('https')
const cheerio=require('cheerio')
const httpsAgent = new https.Agent({ rejectUnauthorized: false })
var a 

const bcvDolar=async() => {
    const result=await axios.get('https://www.bcv.org.ve',{httpsAgent})
    
        const $ =cheerio.load(result.data)
        const dolar = formato($('#dolar').text())
        const euro  = formato($('#euro').text(),1)
        const yuan  = formato($('#yuan').text(),2)
        const lira  = formato($('#lira').text(),3)
        const rublo  = formato($('#rublo').text(),4)
        const valores={
            _dolar: dolar,
            _euro: euro,
            _yuan: yuan,
            _lira: lira,
            _rublo: rublo
        }  
        return valores
        
}
const formato=(str,int=0)=>{
    const monedas = ['USD','EUR','CNY','TRY','RUB']
    const valor=str
    .replace(/(\r\n|\n|\r)/gm, "")
    .replace(monedas[int],"")
    .trim()
    .replace(',','.')

    const res=parseFlt(valor)
    return res
    }
const parseFlt=(str,int=2)=>{
    const res=parseFloat(str).toFixed(int)
    return res
    }


    module.exports ={bcvDolar}
