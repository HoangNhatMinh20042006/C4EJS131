let dong = 5;
space = " ";
flower_fake = "*";
for(let i = 0; i <dong;i++){
    string_1 = space.repeat(15-i*2);
    string_2 = space.repeat(12-i);
    flower_1 = flower_fake.repeat(i+1);
    flower_2 = flower_fake.repeat(2*i+1);
    console.log( flower_1 + string_1 + flower_2 + string_2 + flower_1);
}   