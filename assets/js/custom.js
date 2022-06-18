

// Get Elements
let result_form = document.querySelector('.result-form');
let msg = document.querySelector('#msg');



/**
 *  All Input Data & Validation & Data Storaged at LocalStorage
 */


result_form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get Student info
    let name        = result_form.querySelector('.result-form input[name="name"]').value;
    let institute   = result_form.querySelector('.result-form input[name="institute"]').value;

    let roll        = result_form.querySelector('.result-form input[name="roll"]').value;
    let regi        = result_form.querySelector('.result-form input[name="regi"]').value;
    let group       = result_form.querySelector('.result-form input[name="group"]').value;
    let year        = result_form.querySelector('.result-form input[name="year"]').value;

    // Get marks 
    let bangla       = result_form.querySelector('.result-form input[name="bangla"]').value;
    let en           = result_form.querySelector('.result-form input[name="en"]').value;
    let math         = result_form.querySelector('.result-form input[name="math"]').value;
    let science      = result_form.querySelector('.result-form input[name="science"]').value;
    let religion     = result_form.querySelector('.result-form input[name="religion"]').value;
    let social       = result_form.querySelector('.result-form input[name="social"]').value;



    // Array for All Inputs
    let all_inputs = {
        name        : name,
        institute   : institute,
        roll        : roll, 
        regi        : regi, 
        group       : group, 
        year        : year, 
        bangla      : bangla, 
        en          : en, 
        math        : math, 
        science     : science, 
        religion    : religion, 
        social      : social 
    }


    // Default Variables
    let localStore = localStorage.getItem('resultApp');
    let resultArr;
    

    // validation
    if(Validate.empty(name) || Validate.empty(institute) || Validate.empty(roll) || Validate.empty(regi) || Validate.empty(group) || Validate.empty(year) || Validate.empty(bangla) || Validate.empty(en) || Validate.empty(math) || Validate.empty(science) || Validate.empty(religion) || Validate.empty(social) ){

       msg.innerHTML = Validate.setMsg('All Feilds are Required !', 'red');
       
    }else{

        // Checking LocalStorage
        if(localStore == null){
            resultArr = [];
        }else{
            resultArr = JSON.parse(localStore); 
        }

        // Data Send to LocalStorage
        resultArr.push(all_inputs);
        localStorage.setItem('resultApp', JSON.stringify(resultArr));

        allResult();

        // Feilds Clear
        result_form.querySelector('.result-form input[name="name"]').value = '';
        result_form.querySelector('.result-form input[name="institute"]').value = '';

        result_form.querySelector('.result-form input[name="roll"]').value = '';
        result_form.querySelector('.result-form input[name="regi"]').value = '';
        result_form.querySelector('.result-form input[name="group"]').value = '';
        result_form.querySelector('.result-form input[name="year"]').value = '';

        result_form.querySelector('.result-form input[name="bangla"]').value = '';
        result_form.querySelector('.result-form input[name="en"]').value = '';
        result_form.querySelector('.result-form input[name="math"]').value = '';
        result_form.querySelector('.result-form input[name="science"]').value = '';
        result_form.querySelector('.result-form input[name="religion"]').value = '';
        result_form.querySelector('.result-form input[name="social"]').value = '';


        // Successfull Msg
        msg.innerHTML = Validate.setMsg('Result Stored Successfully !', 'green');

    }

    

});


 /**
 *  All Result Show at the Result Table
 */

allResult();
function allResult(){


let result_table = document.querySelector('#student-result');
let get_result = localStorage.getItem('resultApp');
let data = '';
let resultArr;



 if(get_result == null){
    resultArr = [];
}else{
    resultArr = JSON.parse(get_result); 
}


resultArr.map((d, index) => {

        data += `<tr>
                   <td>${index+1}</td>
                   <td>${d.name}</td>
                   <td>${d.regi}</td>
                   <td>${d.institute}</td>
                   <td><img src="assets/media/img/pp_photo/_MG_1216.jpg" alt=""></td>
                   <td>
                       
                       <a id="view" onClick="onView(${index}), event.preventDefault();" href="">View</a>
                       <a id="del" onClick="onDelete(${index}), event.preventDefault();" href="">Delete</a>
                      
                   </td>
               </tr>`;
   
                   
   
   });
   
   // Connecting with Table
   result_table.innerHTML = data;

}



/**
 * Result Calculation & Modal Show
 */

//Result Modal Show & Close
let modal = document.querySelector('.result-modal');
let marksheet_table = document.querySelector('#marksheet-table');

let modal_title = document.querySelector('.result-modal h2 span');
let modal_name  = document.querySelector('.result-modal .modal-name');
let modal_clg   = document.querySelector('.result-modal .modal-college');
let modal_roll  = document.querySelector('.result-modal .modal-roll');
let modal_regi  = document.querySelector('.result-modal .modal-regi');
let modal_group = document.querySelector('.result-modal .modal-group');
let modal_year  = document.querySelector('.result-modal .modal-year');

let result_table_tbody  = document.querySelector('.result_show');
let result_status  = document.querySelector('.left-side-stu-info h3');

let close_btn = document.querySelector('.close');
let result_cal_table;

 // Get Elements of MarkSheet Table
 let bangla_markSheet_grd        = document.querySelector('.result_show .ban_grd');
 let bangla_markSheet_mark       = document.querySelector('.result_show .ban_mark');
 let bangla_markSheet_pont       = document.querySelector('.result_show .ban_pont');

 let en_markSheet_grd       = result_table_tbody.querySelector('.result_show .en_grd');
 let en_markSheet_mark      = result_table_tbody.querySelector('.result_show .en_mark');
 let en_markSheet_pont      = result_table_tbody.querySelector('.result_show .en_pont');

 let math_markSheet_grd       = result_table_tbody.querySelector('.result_show .mth_grd');
 let math_markSheet_mark      = result_table_tbody.querySelector('.result_show .mth_mark');
 let math_markSheet_pont      = result_table_tbody.querySelector('.result_show .mth_pont');

 let science_markSheet_grd      = result_table_tbody.querySelector('.result_show .scin_grd');
 let science_markSheet_mark     = result_table_tbody.querySelector('.result_show .scin_mark');
 let science_markSheet_pont     = result_table_tbody.querySelector('.result_show .scin_pont');

 let religion_markSheet_grd      = result_table_tbody.querySelector('.result_show .relg_grd');
 let religion_markSheet_mark     = result_table_tbody.querySelector('.result_show .relg_mark');
 let religion_markSheet_pont     = result_table_tbody.querySelector('.result_show .relg_pont');

 let social_markSheet_grd      = result_table_tbody.querySelector('.result_show .socil_grd');
 let social_markSheet_mark     = result_table_tbody.querySelector('.result_show .socil_mark');
 let social_markSheet_pont     = result_table_tbody.querySelector('.result_show .socil_pont');


 // Final Points & GPA Elements
 let total_point     = result_table_tbody.querySelector('.result_show .final_point');
 let total_gpa       = result_table_tbody.querySelector('.result_show .final_gpa');




// Get Element All Subject
let fail_bangal     = marksheet_table.querySelector('#bangla');
let fail_english    = marksheet_table.querySelector('#english');
let fail_math       = marksheet_table.querySelector('#math');
let fail_science    = marksheet_table.querySelector('#science');
let fail_religion   = marksheet_table.querySelector('#religion');
let fail_social     = marksheet_table.querySelector('#social');





/**
 *  View Button Click For MarkSheet Modal 
 * @param {*} id 
 */
function onView(id){

    // All Data form localStorage
    let get_result = localStorage.getItem('resultApp');
    let all_result = JSON.parse(get_result);
    
    // Single Result
    let single_result = all_result[id];

    // Marks
    let ban_mark        = single_result.bangla;
    let en_mark         = single_result.en;
    let math_mark       = single_result.math;
    let science_mark    = single_result.science;
    let religion_mark   = single_result.religion;
    let social_mark     = single_result.social;

    // Grads
    let ban_grad        = gradeCalculate(single_result.bangla);
    let en_grad         = gradeCalculate(single_result.en);
    let math_grad       = gradeCalculate(single_result.math);
    let science_grad    = gradeCalculate(single_result.science);
    let religion_grad   = gradeCalculate(single_result.religion);
    let social_grad     = gradeCalculate(single_result.social);


    /**
     *  Fail Subject Will be Red Color
     */
        if(ban_grad == 'F'){
            bangla_markSheet_grd.style.color = 'red';
            bangla_markSheet_grd.style.fontWeight = 'bold';
            fail_bangal.style.color = 'red';
            fail_bangal.style.fontWeight = 'bold';
        }else{
            bangla_markSheet_grd.removeAttribute("style");
            fail_bangal.removeAttribute("style");
        }
        
        if(en_grad == 'F'){
            en_markSheet_grd.style.color = 'red';
            en_markSheet_grd.style.fontWeight = 'bold';
            fail_english.style.color = 'red';
            fail_english.style.fontWeight = 'bold';
        }else{
            en_markSheet_grd.removeAttribute("style");
            fail_english.removeAttribute("style");
        }
        
        if(math_grad == 'F'){
            math_markSheet_grd.style.color = 'red';
            math_markSheet_grd.style.fontWeight = 'bold';
            fail_math.style.color = 'red';
            fail_math.style.fontWeight = 'bold';
        }else{
            math_markSheet_grd.removeAttribute("style");
            fail_math.removeAttribute("style");
        }
        
        if(science_grad == 'F'){
            science_markSheet_grd.style.color = 'red';
            science_markSheet_grd.style.fontWeight = 'bold';
            fail_science.style.color = 'red';
            fail_science.style.fontWeight = 'bold';
        }else{
            science_markSheet_grd.removeAttribute("style");
            fail_science.removeAttribute("style");
        }
        
        if(religion_grad == 'F'){
            religion_markSheet_grd.style.color = 'red';
            religion_markSheet_grd.style.fontWeight = 'bold';
            fail_religion.style.color = 'red';
            fail_religion.style.fontWeight = 'bold';
        }else{
            religion_markSheet_grd.removeAttribute("style");
            fail_religion.removeAttribute("style");
        }
        
        if(social_grad == 'F'){
            social_markSheet_grd.style.color = 'red';
            social_markSheet_grd.style.fontWeight = 'bold';
            fail_social.style.color = 'red';
            fail_social.style.fontWeight = 'bold';
        }else{
            social_markSheet_grd.removeAttribute("style");
            fail_social.removeAttribute("style");
        }


    

    // Points
    let ban_pont        = pointCalculate(single_result.bangla);
    let en_pont         = pointCalculate(single_result.en);
    let math_pont       = pointCalculate(single_result.math);
    let science_pont    = pointCalculate(single_result.science);
    let religion_pont   = pointCalculate(single_result.religion);
    let social_pont     = pointCalculate(single_result.social);


    
    // Student Info Rendering on the MarkSheet Table
    modal_title.innerHTML = single_result.name;
    modal_name.innerHTML  = single_result.name;
    modal_clg.innerHTML   = single_result.institute;
    modal_roll.innerHTML  = single_result.roll;
    modal_regi.innerHTML  = single_result.regi;
    modal_group.innerHTML = single_result.group;
    modal_year.innerHTML  = single_result.year;



    // Rendering Subjects Mark on the MarkSheet Table
    bangla_markSheet_grd.innerHTML = ban_grad;
    bangla_markSheet_mark.innerHTML = ban_mark;
    bangla_markSheet_pont.innerHTML = ban_pont;

    en_markSheet_grd.innerHTML = en_grad;
    en_markSheet_mark.innerHTML = en_mark;
    en_markSheet_pont.innerHTML = en_pont;

    math_markSheet_grd.innerHTML = math_grad
    math_markSheet_mark.innerHTML = math_mark;
    math_markSheet_pont.innerHTML = math_pont;

    science_markSheet_grd.innerHTML  = science_grad;
    science_markSheet_mark.innerHTML = science_mark;
    science_markSheet_pont.innerHTML = science_pont;

    religion_markSheet_grd.innerHTML  = religion_grad;
    religion_markSheet_mark.innerHTML = religion_mark;
    religion_markSheet_pont.innerHTML = religion_pont;

    social_markSheet_grd.innerHTML  = social_grad;
    social_markSheet_mark.innerHTML = social_mark;
    social_markSheet_pont.innerHTML = social_pont;


    // Arrgument Sending to result calculate function
    resultCalculate(ban_mark, en_mark, math_mark, science_mark, religion_mark, social_mark);
   

    // Mark Sheet GRADE Restrictions
    if(ban_grad == 'F' || en_grad == 'F' || math_grad == 'F' || science_grad == 'F' || religion_grad == 'F' || social_grad == 'F'){
        total_gpa.innerHTML = 'F';
        total_gpa.style.color = 'red'; 
        total_point.style.color = 'red';  
        total_point.style.fontWeight = 'bold';
        total_gpa.style.fontWeight = 'bold';
        marksheet_table.style.boxShadow = 'var(--shadow-red)';
        total_point.innerHTML = 00;
        result_status.style.color = 'red';
        result_status.style.fontWeight = 'bold';
        result_status.innerHTML = 'Faild';
    }else{

        total_point.innerHTML = gradeCalculate(resultCalculate(ban_mark, en_mark, math_mark, science_mark, religion_mark, social_mark));
        total_gpa.innerHTML = pointCalculate(resultCalculate(ban_mark, en_mark, math_mark, science_mark, religion_mark, social_mark));
        marksheet_table.style.boxShadow = 'var(--shadow-green)';
        total_gpa.style.color = 'green'; 
        total_point.style.color = 'green';
        total_point.style.fontWeight = 'bold';
        total_gpa.style.fontWeight = 'bold';
        result_status.style.color = 'green';
        result_status.style.fontWeight = 'green';
        result_status.innerHTML = 'Passed';
    }

    // Modal Call
    modal.classList.add('result-modal-active');


    
}



/**
 *  result Calculate Function
 * @param { } marks 
 * @returns 
 */
 function resultCalculate(ban_mark, en_mark, math_mark, science_mark, religion_mark, social_mark){

    let sum_point = Number(ban_mark) + Number(en_mark) + Number(math_mark) + Number(science_mark) +Number(religion_mark) + Number(social_mark);

    let divide_point = Number(sum_point)/6;

    return divide_point;

}



/**
 *  Grade Calculation
 */
function gradeCalculate(marks){

    if(marks < 33){
        return 'F';
    }else if(marks < 40){
        return 'D';
    }else if(marks < 50){
        return 'C';
    }else if(marks < 60){
        return 'B';
    }else if(marks < 70){
        return 'A-';
    }else if(marks < 80){
        return 'A';
    }else if(marks <= 100){
        return 'A+';
    }

}


/**
 *  Point Calculation
 */
 function pointCalculate(point){

    if(point < 33){
        return '00';
    }else if(point < 40){
        return '2.00';
    }else if(point < 50){
        return '2.50';
    }else if(point < 60){
        return '3.00';
    }else if(point < 70){
        return '3.50';
    }else if(point < 80){
        return '4.00';
    }else if(point <= 100){
        return '5.00';
    }

}


/**
 *  Modal Close Button 
 */
 close_btn.addEventListener('click', function(e){
    e.preventDefault();

    
    modal.classList.remove('result-modal-active');


});



/**
 *  Delete Button Click for Delete Student Result 
 */
function onDelete(id){

    let del_result = localStorage.getItem('resultApp');
    let del_all_result = JSON.parse(del_result);

    del_all_result.splice(id, 1);
    
    localStorage.setItem('resultApp', JSON.stringify(del_all_result));
    
    allResult();

}





















