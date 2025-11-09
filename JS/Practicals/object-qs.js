// Convert nested object into flat object

function flatten(obj,parent='',res={}){
    for(let key in obj){
        if(typeof obj[key]==='object' && obj[key] !== null){
            flatten(obj[key],parent?`${parent}_${key}`:key,res);
        }else{
            res[parent?`${parent}_${key}`:key]=obj[key];
        }
    }
    return res
}
