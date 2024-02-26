function showTab(tabName) {

    var tabs = document.getElementsByClassName('tabs');
    var buttons = document.getElementsByTagName('button');

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
        buttons[i].classList.remove('active');
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    var selectedButton = document.querySelector('button[onclick="showTab(\'' + tabName + '\')"]');
    var selectedTab = document.getElementById(tabName);

    selectedTab.style.display = 'block';
    selectedButton.classList.add('active');
}

showTab('Home');

function showCollection(idname) {
    var tabs = document.getElementsByClassName('collection');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
        tabs[i].classList.remove('active');
        tabs[i].classList.remove('transition-effect');
    }
    document.getElementById(idname).style.display = 'block';
    document.getElementById(idname).classList.add('active');
    document.getElementById(idname).classList.add('transition-effect');
    document.getElementById(idname).scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function openLogin() {
    closeSignup();
    document.getElementById("login").style.display = "block";
    var elements = document.getElementsByClassName('tabs');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.filter = 'blur(5px)';
    }
    var elements = document.getElementsByClassName('collection');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.filter = 'blur(5px)';
    }
    document.getElementById("topBar").style.filter = 'blur(5px)';
    document.getElementById("bottom").style.filter = 'blur(5px)';
}

function closeLogin() {
    document.getElementById("login").style.display = "none";

    var elements = document.getElementsByClassName('tabs');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.filter = 'blur(0)';
    }
    var elements = document.getElementsByClassName('collection');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.filter = 'blur(0)';
    }
    document.getElementById("topBar").style.filter = 'blur(0)';
    document.getElementById("bottom").style.filter = 'blur(0)';
}

function openSignup() {
    closeLogin();
    document.getElementById("signup").style.display = "block";
    var elements = document.getElementsByClassName('tabs');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.filter = 'blur(5px)';
    }
    var elements = document.getElementsByClassName('collection');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.filter = 'blur(5px)';
    }
    document.getElementById("topBar").style.filter = 'blur(5px)';
    document.getElementById("bottom").style.filter = 'blur(5px)';
}

function closeSignup() {
    document.getElementById("signup").style.display = "none";

    var elements = document.getElementsByClassName('tabs');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.filter = 'blur(0)';
    }
    var elements = document.getElementsByClassName('collection');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.filter = 'blur(0)';
    }
    document.getElementById("topBar").style.filter = 'blur(0)';
    document.getElementById("bottom").style.filter = 'blur(0)';
}

function slider(order) {
    var elements = document.getElementsByClassName('collection');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains('active')) {
            if (order === 'back') {
                var slided = elements[i - 1].id;
                showCollection(slided);
                break;
            }
            else if (order === 'next') {
                var slided = elements[i + 1].id;
                showCollection(slided);
                break;
            }

        }
    }
}

function popPoem(idname) {
    var tabs = document.getElementsByClassName('poemsplus');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
        tabs[i].classList.remove('transition-effect');
    }

    var selectedPoem = document.getElementById(idname);

    selectedPoem.style.display = 'block';
    selectedPoem.classList.add('active');
    selectedPoem.classList.add('transition-effect');
    const scrollPosition = 900;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
}

function addComments(spec) {
    let tabs = document.getElementById(spec);
    let newElement = createNewElement(spec);
    tabs.appendChild(newElement);
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].parentElement.parentElement.id == spec) {
            inputs[i].value = "";
        }
    }
}

function createNewElement(spec) {
    let span = document.createElement('div');
    let content;
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].parentElement.parentElement.id == spec) {
            content = inputs[i].value;
        }
    }

    let text = document.createTextNode(content);
    span.style.color = "black";
    span.style.width = "100%";
    span.style.textIndent = "20px";
    span.style.marginBottom = "20px";
    let img = document.createElement('img');
    img.src = 'images/pipo.jpg';
    img.style.width = '50px';
    img.style.height = '50px';
    img.style.verticalAlign = "center";
    img.style.border = "#333 solid 1px";
    img.style.borderRadius = "10px";
    span.style.display = "inline-flex";
    span.appendChild(img);
    span.appendChild(text);
    return span;
}

document.getElementById("submissionStory").addEventListener("click", function () {
    window.alert("We received your story submission.");
});

document.getElementById("submissionPoem").addEventListener("click", function () {
    window.alert("We received your poem submission.");
});

document.getElementById("requestBtn").addEventListener("click", function () {
    window.alert("We received your request. Check your email for news.");
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

document.getElementById("randomRead").addEventListener("click", function () {
    var tabs = document.getElementsByClassName('poemsplus');
    var index = getRandomInt(0, tabs.length);
    var idRand = tabs[index].id;
    if (index > 63) {
        showTab('Stories');
        popPoem(idRand);
    }
    else {
        showTab('Poems');
        popPoem(idRand);
    }
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
} 