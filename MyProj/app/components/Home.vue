<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Calculator">
    </ActionBar>

    <StackLayout>
      <Label class="operations" :text="input_view" placeholder="0"/>
      <Label class="partial" :text="partial"/>
      <FlexboxLayout flexDirection="row" class="buttons">
        <FlexboxLayout flexDirection="column" class="sosa">
            <FlexboxLayout flexDirection="row" class="candpow">
                <Button class="buttC" @tap="clear()">C</Button>
            </FlexboxLayout>
            <FlexboxLayout class="numbers" flexWrap="wrap">
                <Button class="number" @tap="addNumber(1)">1</Button>
                <Button class="number" @tap="addNumber(2)">2</Button>
                <Button class="number" @tap="addNumber(3)">3</Button>
                <Button class="number" @tap="addNumber(4)">4</Button>
                <Button class="number" @tap="addNumber(5)">5</Button>
                <Button class="number" @tap="addNumber(6)">6</Button>
                <Button class="number" @tap="addNumber(7)">7</Button>
                <Button class="number" @tap="addNumber(8)">8</Button>
                <Button class="number" @tap="addNumber(9)">9</Button>
                <Button class="number" @tap="addNumber(0)">0</Button>
                <Button class="number" @tap="addNumber('.')">.</Button>
                <Button class="number" @tap="calc()">=</Button>
            </FlexboxLayout>
        </FlexboxLayout>
        <FlexboxLayout flexDirection="column" class="actions">
          <Button @tap="addNumber('/')" >/</Button>
          <Button @tap="addNumber('*')" >x</Button>
          <Button @tap="addNumber('-')" >-</Button>
          <Button @tap="addNumber('+')" >+</Button>
        </FlexboxLayout>
      </FlexboxLayout>
    </StackLayout>
  </Page>
</template>

<script>
export default {
    data () {
      return {
        input_view:'',
        value_array: [],
        arifmetic_array: [],

      };
    },
    methods: {
      addNumber(n) {
        this.input_view = this.input_view.toString();
        let last_symbol = this.input_view.slice(-1);
        if (last_symbol == '' && n % 1 == 0) {
            this.input_view += n;
        }
            //.
        else if (last_symbol == '.' && n % 1 == 0){
            this.input_view += n;
        }
            //0123
            //началось число если первым это число [1-9] или если символ "."
            //закончилось число если это символ +-*/
        else if (last_symbol == '0' && n % 1 == 0){

            let can_past_number = false; //. 0       +-*/
            console.log("__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________")
            this.input_view.split('').forEach(function(entry) {
                if (can_past_number == false) {
                    if (entry != 0 || entry == '.'){
                        can_past_number = true;
                    }
                    
                }else{
                    if (n % 1 != 0){
                        can_past_number = false;
                    }
                }
            });
            if (can_past_number == true){
                this.input_view += n;
            }
            
        }
        //123+0......
        //123+2......
        //0.0.0
        //число начинается с ![0-9] но не на ! "."  заканчивается на ![0-9] но не на ! "."
        else if( n == '.'){
            let start_number = false; 
            let can_past_point = false; 
            this.input_view.split('').forEach(function(entry) {
 
                if (start_number == false) {
                    if (entry % 1 != 0 && entry != '.'){
                        start_number = true;
                        can_past_point = true; 
                    }
                      if (entry % 1 == 0) {
                        start_number = true;
                        can_past_point = true; 
                    }
                }
                else{
                    if (entry == '.'){
                        can_past_point = false;
                    }else if (entry % 1 != 0){
                        can_past_point = false;
                        start_number = false;
                    }
                }
            });
            if (can_past_point == true) {
                this.input_view += n;
            }
            
        }

        //замена последнео символа выражения
        else if (last_symbol % 1 != 0 && n != '.' && n % 1 != 0) {
            this.input_view = this.input_view.substring(0, this.input_view.length-1) + n
        }else{
            this.input_view += n;
        }

        try{
            let result = eval(this.input_view);
            if(result != 'Infinity'){
                this.partial = result;
            }
        }catch{
            this.partial = '';

        }

      },
       
      clear(){
            this.input_view = '';
            this.partial = '';
      },
      calc(){
        try{

            this.input_view = eval(this.input_view);
            if(this.input_view == 'Infinity'){
                this.input_view = '';
                this.partial = 'Ошибка вычислений!';
            }
            else{
                this.partial = this.input_view;
            }
        }
        catch{
            this.partial= 'Ошибка';
        }
      }
    
    }
  };
</script>

<style scoped lang="scss">
    Button {
    margin: 0;
    font-size: 26;
    height: 20%;
    border-radius: 0.5%;
    color: white;
    background-color: #474c4e;
    &:active{
        background-color: #585d5f; ;
    }
  }
  Label {
    font-size: 32;
    text-align: right;
    background: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    padding: 20;
  }
  .partial {
    font-size: 25;
    color: rgb(255, 255, 255);
  }
  .number {
    width: 33.33%;
  }
  .buttC{
      width: 100%;
      background-color: #587581;
  }
  .candpow{
      width: 200%;
  }
  .buttX{
      width: 33.33%;
      background-color: #70909e;
  }
  .sosa{
      width: 80%;
  }
  .buttons{
      width: 100%;
  }
  .actions Button {
    height: 25%;
    width: 21%;
    background-color: #fa7a03;
  }
    .actions Button:active {
    background-color: #c97f47;
  }
  .numbers {
    width: 70%;
    height: 100%;
  }
</style>