   var errors = new Object();
       errors.test = " ";
       errors.Cn = 0;
       errors.Pn = 0;



   function FormValidation() {
   		//variables declaration
    	var surname = document.pizza.Field01.value;
        var ClientNum = document.pizza.Field02.value;
        var telephone = document.pizza.Field03.value;
        var DateOfBirth =  document.pizza.Field04.value;
        var Size = document.pizza.Field05.value;


        //function call
        surname1(surname);
        ClientNumCheck(ClientNum);
        PhonenumberCheck(telephone);
        if(errors.Cn === 0 && errors.Pn === 0){
            relationship(ClientNum,telephone);
        }
        DateOfBirthCheck(DateOfBirth);
        SizeCheck(Size);
        SaucesCheck();
        ToppingsCheck();
        //end of the programm
        var s = errors.test;
        if(s.length === 13 || s.length > 13){
        	//alert("false");//test
        	//alert(s.length);//test
        	myWindow=window.open('','','width=450,height=300');
            myWindow.document.write(errors.test);
            myWindow.focus();
            errors.reset();
        	return false;
        }else{
        	//alert("true");//test

        	return true;
        }
    }
    //checks errors
    var surname1 = function(surname){
        var alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'-";
        //var alph2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var apostrophe = 0;
        var hyphen = 0;
        var cnt =0;
        var nonChar = 0;

        if(surname.length < 1){
    		errors.er("<p>Client name required</p>");

    	}else{
            for(i = 0;i < surname.length;i++){
                if(alph.indexOf(surname.substr(i,1)) ===-1){
                    nonChar++;
                    //alert("for loop ");///test
                }else if(surname.charAt(i) === "'"){
                    apostrophe++;
                   // alert("apostrophe" + apostrophe);//test
                }else if(surname.charAt(i) === "-"){
                    hyphen++;
                   // alert("hyphen" + hyphen);///test
                }

            }
        }
        if(nonChar > 0){
            errors.er("<p>Only allowed to use characters from a-z A-Z</p>");
        }
        if(apostrophe > 1){
            errors.er("<p>Only one apostrophe allowed</p>");
            //alert(apostrophe);///test
        }
        if(hyphen > 1){
            errors.er("<p>Only one hyphen allowed</p>");
            //alert(apostrophe);///test
        }


    };

    var ClientNumCheck = function(ClientNum){
        var alph = "TG";
        var numbers = "1234567890";
        var TG = 0;
        var hyphen = 0;
        var num1 = 0;
        var num2 =0;
        if(ClientNum.length < 12){
            errors.er("<p>Client number must be present</p>");
            errors.er1();
           // alert("ClientNum");///test
        }else{
            for(i=0;i < ClientNum.length;i++){
                if(alph.indexOf(ClientNum.substr(0,1)) ===-1){
                    TG++;

                   // alert("ClientNum T and G");///test
                }
                if(ClientNum.charAt(6) !== "-"){
                    hyphen++;

                   // alert("no - ");//test
                }else if(numbers.indexOf(ClientNum.substr(1,5)) ===-1){
                    num1++;

                   // alert("<p>Must have numbers</p>");//test

                }else if(numbers.indexOf(ClientNum.substr(7,11)) ===-1){
                    num2++;

                   // alert("<p>Must have numbers 2</p>");//test
                }

            }
            if(TG > 0){
                errors.er("<p>Client number must start with T or G</p>");
                errors.er1();
            }
            if(hyphen > 0 || num1 >0 || num2 > 0){
               errors.er("<p>Client numbmer have to use LNNNNN-NNNNN format ex. G12345-67890</p>");
               errors.er1();
            }

        }

    };
    var PhonenumberCheck = function(telephone){
        var numbers = "1234567890-";
        var hyphen = 0;
        var code = 0;
        var pnum =0;
        var cnt2 = 0;

        if(telephone.length < 12){
            errors.er("<p>Phone number must be present</p>");
            errors.er2();
            //alert("PhoneNum");///test
        }else{
            for(i=0;i < telephone.length;i++){

                if(numbers.indexOf(telephone.substr(i,1)) ===-1){
                    cnt2++;
                }else if(telephone.charAt(i) === "-"){
                    hyphen++;
                    //alert("hyphen" + hyphen);///test
                }else if(telephone.charAt(i) === "0"){
                    if(code <3 && hyphen ===0){
                       code++;
                    }
                    pnum++;
                }
            }
            if(hyphen > 2 || hyphen === 0){
            errors.er("<p>Phone number have to be written in nnn-nnn-nnnn</p>");
            errors.er2();

            }
            if(code > 2){
                errors.er("<p>Area code cant be all zeros</p>");
                errors.er2();
            }
            if(pnum === 10 ){
               errors.er("<p>Phone number cant be all zeros</p>");
               errors.er2();

            }
            if(cnt2 !==0 ){
                errors.er("<p>Phone number can only be numbers</p>");
                errors.er2();
            }

        }
    };
    var relationship = function(ClientNum,telephone){
        if(ClientNum.charAt(0) === "T" && telephone.substr(0,3) !== "416"){
            errors.er("<p>Area code have to be 416</p>");
        }
        if(ClientNum.charAt(0) === "G" && telephone.substr(0,3) !== "905"){
            errors.er("<p>Area code have to be 905</p>");
        }
    };
    var DateOfBirthCheck = function(DateOfBirth){
        var monthName = new Array('JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC');
        var numbers = "1234567890";
        var cnt3 = 0;
        var year = new Date();
        var yearcnt = 0;

        if(DateOfBirth.length < 7){
            errors.er("<p>Date of birth must be present</p>");
            //alert("DateOfBirth");///test
        }else{
            for(i=0;i < 12;i++){
                if(monthName[i] === DateOfBirth.toUpperCase().substr(0,3)){
                    cnt3++;
                    //alert(cnt3);//test
                }
                if(numbers.indexOf(DateOfBirth.substr(i,1)) === -1){
                    yearcnt++;
                }

            }
            if(cnt3 === 0 || yearcnt > 3){
               errors.er("<p>Date of birth have to use mmmyyyy ex. JAN2012</p>");
               //alert(cnt3 + "year" + yearcnt);
            }
            if((year.getFullYear() - DateOfBirth.substr(3,5)) < 19 || DateOfBirth.substr(3,5) === "0000"){
                errors.er("<p>Have to be 19 or older to make order</p>");
            }
        }

    };
    var SizeCheck = function(Size){
        if(Size.length === 17 || Size.length === 0){
            errors.er("<p>Select size</p>");
           // alert("Size " + Size.length);///test
        }
        //alert("Size " + Size);


    };
    function calculatePrice(){
        var Size = document.pizza.Field05.value;
        var total = 0;
        var tax = 0;

        if(Size === "Small"){
            tax = 11.55*.13;
            total = 11.55 + tax;
           document.pizza.field07.value = "$" + total.toFixed(2);
        }
        if(Size === "Medium"){
            tax = 15.25*.13;
            total = 15.25 + tax;
           document.pizza.field07.value = "$" + total.toFixed(2);
        }
        if(Size === "Large"){
            tax = 22.00*.13;
            total = 22.00 + tax;
           document.pizza.field07.value = "$" + total.toFixed(2);
        }
        if(Size === "X-Large"){
            tax = 25.00*.13;
            total = 25.00 + tax;
           document.pizza.field07.value = "$" + total.toFixed(2);
        }
        if(Size === "Select Pizza Size"){
            total = 0;
            document.pizza.field07.value = "$" + total.toFixed(2);
        }

    }

    var SaucesCheck = function(){
        var max = document.pizza.Field09.length;
        var SaucesCtr = 0;
        for(i=0;i < max;i++){
            if(document.pizza.Field09[i].checked === true){
            SaucesCtr++;
            }
        }
        if(SaucesCtr === 0){
            errors.er("<p>Choose type of the sauce</p>");
        }

    };
    var ToppingsCheck = function(){
        var max = document.pizza.Field10.length;
        var TopCtr =0;
        for(i=0;i < max;i++){
            if(document.pizza.Field10[i].checked === true){
            TopCtr++;
            }
        }
        if(TopCtr === 0){
            errors.er("<p>Choose at least one topping</p>");
        }
        //alert(TopCtr + "ToppingsCheck");
    };

    //counts errors
    errors.er = function(add){
    	errors.test +=add;
    };
    errors.er1 = function(){
         errors.Cn++;
    };
    errors.er2 = function(){
         errors.Pn++;
    };

    //resets errors
    errors.reset = function(){
    	errors.test = " ";
        errors.Pn = 0;
        errors.Cn = 0;
    };
