 var a = document.getElementsByName('a');

        a.addEventListener('click', showResult);
        console.log(e.target.name);
        function showResult(e) {
            switch (e.target.name) {
                case 'a[0]':
                    alert(1);
                    break;
                case 'a[1]':
                    alert(2);
                    break;
                case 'a[2]':
                    alert(3);
                    break;
                case 'a[3]':
                    alert(4);
                    break;
            }
        }