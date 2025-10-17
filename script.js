function mostrar() {
            document.getElementById("nav").style.width = "250px";
            document.getElementById("nav-shadow").style.width = "100vw";
        }

        function esconder() {
            document.getElementById("nav").style.width = "0";
            document.getElementById("nav-shadow").style.width = "0";
        }

        function slides() { // Function principal. Ela é chamada novamente no fim do código.
            var sld = document.querySelector('.slider')
            var img = document.createElement('img') // cria a tag img

            //sld.style.height = '300px'
            //sld.style.overflow = 'hidden'
            //img.style.width = '100%'

            img.setAttribute('src', 'img/grill.png') //seleciona slide 1
            sld.appendChild(img)

            setTimeout(sld2, 3000)
            function sld2() {
                img.setAttribute('src', 'img/burguer.png') //seleciona slide 2

                setTimeout(sld3, 3000)
                function sld3() {
                    img.setAttribute('src', 'img/family.png') //seleciona slide 3

                    setTimeout(sld1, 3000)
                    function sld1() {
                        img.setAttribute('src', 'img/grill.png') //retorna ao slide 1
                        img.removeAttribute('src') //apaga a tag img
                        setTimeout(slides,0000) //Para criar um loop, chama a function principal
                    }
                }
            }
        }
