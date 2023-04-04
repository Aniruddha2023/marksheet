const submitbtn = document.querySelector('#submit')

submitbtn.addEventListener('click',(e)=>{
    
    e.preventDefault();
    const english = parseIntp(document.querySelector('#english').value)
    const bangla = parseInt(document.querySelector('#bangla').value)
    const math = parseInt(document.querySelector('#math').value)
    const social = parseInt(document.querySelector('#social').value)
    const science = parseInt(document.querySelector('science').value)

    const totalMarks = document.querySelector('.total-marks').textContent = english+bangla+math+social+science


    const grade = document.querySelector('.grade').textContent = findGrade(totalMarks)

    const percentage = document.querySelector('.percentage').textContent = totalMarks / 5 +'%'
    document.querySelector('.marks-container').style.visibility ='hidden'
    document.querySelector('.result-container').style.visibility =''
});

function findGrade(marks){
    if(marks <=500 && marks > 450) return 'A+'
    else if(marks <=449 && marks > 400) return 'A'
    else if(marks <=399 && marks > 350) return 'B'
    else if(marks <=349 && marks > 300) return 'C'
    else if(marks <=299 && marks > 250) return 'D'
    else if(marks <=249 && marks > 200) return 'E'
    else if(marks <=199 ) return 'F'
};