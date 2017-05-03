const reducer = (state= defaultState ,action)=>{
    let {type,payload} = action;
    switch (type){
        case 'SETSTARTPLACE' :
            console.log(payload);
            return Object.assign({},state,{
                startPlace:payload
            });
        break;
    }
};
export default reducer;