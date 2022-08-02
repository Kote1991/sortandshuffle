let numberPanel= {
    num_color:[ 
        {no:1,color:"#000000"},
        {no:2,color:"#2B8EAD"},
        {no:3,color:"#333333"},
        {no:4,color:"#6F98A8"},
        {no:5,color:"#798f9a"},
        {no:6,color:"#BFBFBF"},
        {no:7,color:"#EFEFEF"},
        {no:8,color:"#2F454E"},
        {no:9,color:"#72C3DC"}              
    ],

    shuffle:function (){
        let _num =[...this.num_color];
        let result=[];
        while(result.length < 9 ){
            let temp= Math.floor(Math.random()*_num.length);
            result.push(_num.splice(temp,1)[0]);
        }
        return result;
    },

    sort:function(){
        return   this.num_color.sort((a,b)=> a.no-b.no)
    },

    paint:function(list){
        let _id= document.getElementById('panel');
        let content='';    
        for (let i = 0; i < list.length; i++){
            content += `<div 
            data-color="${list[i].color}"
            style="background:${list[i].color}; border-left:${list[i].color} solid 4px "
            class='box'>
            ${list[i].no}
            </div>`;
        }
            _id.innerHTML= content;
    }
}
    
    
function init(){
    numberPanel.paint(numberPanel.sort())
}

function shuffle(){
    numberPanel.paint(numberPanel.shuffle())
}

function sort(){
    numberPanel.paint(numberPanel.sort())
}

init();