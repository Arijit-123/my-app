import { createStore } from "redux";
const reducerfn=(state={counter:10},action)=>{
const store= createStore(reducerfn);
if(action.type==='INC')
{
    return{counter:state.counte+1}
}
if(action.type==='DEC')
{
    return{counter:state.counte+1}
}
if(action.type==='ADD')
{
    return{counter:state.counte+1}
}
return state;
};
const store= createStore(reducerfn)
export default store;