console.log(Sum(1)(2)(3))

function Sum(a){
    return function Sum(b){
        return function Sum(c){
            return a+b+c;
        }
    }
}