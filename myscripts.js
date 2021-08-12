function saveNotes() {
    let feature_flag = document.getElementById('feature-flag');
    let text_content = document.getElementById('textarea').value;

    if (feature_flag.checked) {
        //write code for check
        setInterval(function () {
            let text_content = document.getElementById('textarea').value;
            localStorage.setItem("autosave-data", text_content);

        }, 1000);

        // console.log("checked")

    } else {
        //write code for if unchecked 

        localStorage.setItem("autosave-data", text_content);
        // console.log("unchecked")

    }

    
    // console.log(text_content);

}



function getNotes() {
    let data = localStorage.getItem('autosave-data');
    let output_box = document.getElementById('output-box');
    if (data === "" || data === null) {
        swal("Nothing to be get", "first write something and save it.");

    } else {
        output_box.style.display = 'block';
        let result = document.getElementById('result');
        result.innerText = `${data}`;
    }
    // console.log(data);
}

function reset() {
    let text = document.getElementById('textarea');
    text.value = "";
}

function deleteNotes() {
    let data = localStorage.getItem('autosave-data');
    let output_box = document.getElementById('output-box');
    if (data === "" || data === null) {
        swal("Nothing to be delete", "first write something and save it.");

    } else {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this note!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    localStorage.removeItem('autosave-data');
                    output_box.style.display = 'none';
                    swal("Poof! Your note has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your note is safe!");
                }
            });
    }

}

function changeMode() {
    let parent = document.getElementById('container');
    let mode_icon = document.getElementById('mode-icon');
    if (parent.className === 'container') {
        parent.className = 'container night'
        document.body.style.background = '#202124';
        mode_icon.className = 'fas fa-moon'
        mode_icon.style.background = '#00002c'
        mode_icon.style.color = '#fff'
    } else {
        parent.className = 'container';
        document.body.style.background = '#fff';
        mode_icon.className = 'fas fa-sun'
        mode_icon.style.background = '#fff'
        mode_icon.style.color = '#000'
    }
}