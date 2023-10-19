const ganti = document.getElementById("Header")
    ganti.addEventListener("mouseover",function(){
        ganti.style.backgroundColor = "brown";

    })

    const ganti1 = document.getElementById("Header")
    ganti1.addEventListener("click",function(){
        ganti1.style.backgroundColor = "teal";

    })

    const ganti2 = document.getElementById("Navbar")
    ganti2.addEventListener("click",function(){
        ganti2.innerHTML = "Bilah Navigasi";
        ganti2.style.backgroundColor = "blue";
    })

    const gantiW1 = document.getElementById("LeftPanel")
    gantiW1.addEventListener("mouseover",function(){
        gantiW1.style.backgroundColor = "Aquamarine";
    })

    const ganti4 = document.getElementById("LeftPanel")
    const ganti4A = document.getElementById("Left1")
    const ganti4B = document.getElementById("Left2")
    const ganti4C = document.getElementById("Left3")
    ganti4.addEventListener("click",function(){
        ganti4A.style.backgroundColor = "pink";
        ganti4B.style.backgroundColor = "blue";
        ganti4C.style.backgroundColor = "pink";
    })

    const gantiW2 = document.getElementById("CenterPanel")
    gantiW2.addEventListener("mouseover",function(){
        gantiW2.style.backgroundColor = "brown";
    })

    const ganti5 = document.getElementById("CenterPanel")
    const ganti5A = document.getElementById("center1")
    const ganti5B = document.getElementById("center2")
    const ganti5C = document.getElementById("center3")
        ganti5.addEventListener("click",function(){
        ganti5A.style.backgroundColor = "violet";
        ganti5B.style.backgroundColor = "violet";
        ganti5C.style.backgroundColor = "violet";

    })

    const gantiW3 = document.getElementById("RightPanel")
    gantiW3.addEventListener("mouseover",function(){
        gantiW3.style.backgroundColor = "yellow";
    })

    const ganti6 = document.getElementById("RightPanel")
    const ganti6A = document.getElementById("right1")
    const ganti6B = document.getElementById("right2")
        ganti6.addEventListener("click",function(){
        ganti6A.style.backgroundColor = "orange";
        ganti6B.style.backgroundColor = "orange";
    })

    const gantiW4 = document.getElementById("Footer1")
    gantiW4.addEventListener("mouseover",function(){
        gantiW4.style.backgroundColor = "purple";
    })

    const gantiW4a = document.getElementById("Footer1")
    gantiW4a.addEventListener("mouseout",function(){
        gantiW4a.style.backgroundColor = "#99627A";
    })

    const gantiW5 = document.getElementById("Footer2")
    gantiW5.addEventListener("mouseover",function(){
        gantiW5.style.backgroundColor = "teal";
    })

    const gantiW5a = document.getElementById("Footer2")
    gantiW5a.addEventListener("mouseout",function(){
        gantiW5a.style.backgroundColor = " #643843";
    })

    var button = document.getElementById("button")
    button.addEventListener("click",function(){
        var warna = document.getElementById("input").value;
        let li = document.getElementsByTagName("LI");
        for (let i=0; i<li.length; i++){
            if(i%2 == 1)
                li[i].style.backgroundColor = warna;
        }
    });