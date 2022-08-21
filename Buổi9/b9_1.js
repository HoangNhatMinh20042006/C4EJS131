let a = [5,1,4,2,8];
function sap_xep_mang(mang) {
    let x;
    let do_dai = mang.length;
    for(let i = 0; i < do_dai-1;i++){
        for (let j = i; j < do_dai; j++){
            if (mang[i]>mang[j]) {
                x = mang[i];
                mang[i]=mang[j];
                mang[j]=x;
            }
        }
    }
}
sap_xep_mang(a);
console.log(a);
