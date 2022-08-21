let day_so_ng_to = [];
for(let i = 2; i<100; i++){
    let so_ng_to = true
    for(let j = 2; j<i;j++){
        if (i%j==0) {
            so_ng_to = false
        }
    }
    if(so_ng_to == true){
      day_so_ng_to.push(i);
    }
}
console.log(day_so_ng_to);