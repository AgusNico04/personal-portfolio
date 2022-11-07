import React from 'react';
import './Presentation.css';

export default function Presentation() {
    return (
        <section id='presentation'>
            <div id="presentation-div">
                <img id='presentation-img' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBAPDw0PDxANDg0NDg0PDQ8NDw8NFhEWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGysdHSUtLS0tKy0tKy0rLS0tLS0tLS0tLS0tLSsrKy0tKy0tLSstKy0tKy0rLS0tLS0tKzctLf/AABEIAJcBTgMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQIGAwQFBwj/xAA6EAACAgECBAQDBQcDBQEAAAAAAQIRAwQhBRIxQQZRYYETInEykaGxwQcUQlLR4fBicoIjM0NTshX/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQMEAv/EAB0RAQEAAwEBAQEBAAAAAAAAAAABAhEhEgMxQVH/2gAMAwEAAhEDEQA/AOJGSMUU9PLJFIisCCwQDIETKAAAAAAWwQoAAAcWozxguaRonG+JzlklKGf5X/ApWk/I2LxRqYwglVylbr0/xmiSi3K+V7/ceMq9Yx2I5lJ7wt97k0r9bZ2ceBP+DG1/L6exMGnX8XzS7RW56WlwrpHFPJPpUFdP6ni2RpJtwZNHjcU4Y8cZVvtd/edR80FUoprelbTX0tf2No0Xg/iOo3Ufgx63km17bI7sv2b65dc2OSfVJzv67k9PXitLy5MeaKTuGXGuVOlU4+TOqsksbUk637btM3mf7PsiVOT5uz6o17inAM2JSUo3W9re0iTOF+dexwLxEskeXImnHbnSck160tjYYyTVp2n0Z8jwZpQney39T6P4e1HxMMZrZPar7rZ0bSsLHrFID0gAAKQAAAAAAABggAAARkMjFgYmRiUDIEKAFAAQFAELZCgEUhQAAAAADUPGs1HJi85xb67JRdL/AOvwPBgrdb7ef6I7vj/O3qIQX/jxL75Nv9Een4U0scjjOUVfX38/vMs7rrXCb49Hwt4YnmalmuGN9ILaU/r5I+pcJ4RhwxSx44rby3PM4bBKvxNg0r2Rzzt66rNTjuYYKuhZomPoJ7mjN0NVA1vi2hU0017mz516Hm6jGnsZZRrK+BeJOHfAyyW202jaPAeqU9O4LriySv1Ut1+p1PH2Kss497v+55/gDU8uonip1kx83opR7/izpwvHJnO19AIAasgpABQAAAAAAAAABAUgAhQBxlTAoAUxKBkCACglgCAADJMEKAstmLQQGQMSgaD4907WohkrbJjUW/8AVF/3R73hOoQT6Vyx/qdPxzj54qvtYanV78rdNpdzLw7jebHHGrSl9qvKzH6NvnuNzxeKtPjk9+bl2td/7ep6mi8c6NyULkr7uPyp/U1qGkljl8DBgxSl8OU1kypSXMk6TvZW1Xv2MOFcL1WqU56jS48HwoxSUMc4ZMmXmd8sXtsuX0/1b7ZSc3G93+V9V0upjOKlF2nvsdLjPGo6aDlKDk6dR6W68/Y8fwvDJhnLDKfNGCUoPyT7HY4joXlc52nKL5YRk9oruxumniPxfq822LQT7/Nbr8UYaLjeaORQ1OKUPiSXLJ7bvsdSfDeIrVcv71H90UpT+Jy4U3i5docnXm5vT37HpaDQZMuP/rw5lfy226rum96+tjLhI0r9o2JfFU6rmjs/On0/FHi+BcK/ecsq6YlV+rNk/aFp5SeKKVycnGK726SX5Ha4bwXDpYqOOLnmUF+9ajmlyube0Ip7Ut+n5mmF1plnjbuu4ADdzgAApAABSFQApAACAAEKQgAADjFgFAtkKAKQAUAgABiwKCFQApAAAAHlce4fHJBz6Sx48j5vJPl6+mzMv2fY4xUX1uNr3Z2OIqTxzhFf92Dg6e9ppr26nmeCM7jJ45dYbKn2X9jnz/rqw7I+oPR48lNxVrv0ZlLDHHHZdO7/AEMNBntKjLimeMMM5yajUer6K9kZtnT4LJyzTfaq9z0OZrI67voeR4Y4ppubLH4kbhJuS5kdnJxnTT1UcOPKnO0qTt7sfwew9NB78qJl2TORyfR/f5o6GvytJipI1Hj2nllzYVCueObmjfpFv9EepxPGo4k+icYQjHyaknR0sD59VDdx3m01V7RfmcvGpNSjC7q5/f5+p6w7Ymd1jlXnAA6nCAAAAABSACgAAQAAACCggA4xZAUWxZCoC2LJQoC2CFAEKQAVMxFgZ2LMbKBSAAGjXceNabVOntKKn99pr8DYjw/EOJqUMn+lxf1Ttfm/uM85NbaYZXem+8E1cORTb2q/c5s+Z51KM4RcJqnGdOLXqjUvCms5lySf2d0ejxOM5O45nGK6xVR6epz67p143ax8K6SE3KM3B39iM1GLXke1ocOlwpcrxwlVcyq379zWMeo0+NVLHPNOTe0XlytnL8bT5fllpXi7Xk00rrt1ReNvGH+twhqHdxkpRVfcdbi+pXI66tOvQ6XCcOPHbjKTtfzSpL0Tex53GeILm5fq1X9Tze3jHLjpfFlHJGcJU+VttL1r9TOU23cm5N9Wzgwy5m5fSK9uv4/kcp0/PHUcn0ytulBAaM1sWQoAAAUAAAAAAAAAEAAoHCACgEwQDOyGNlsCizGxYGVkMbFgZEsliwLZUzGwmBnYsxsWBnZw6vAskHB990/J9mZ2dXWcSw4VeTIk/wCXrJ+yIrw9Fm+HLmg9ujSfR+TNt4froTS5le3R7Gkxg0+ZWrbfsdrBqJQdr/PY57JXRLY37R6vH8Wko40l9ld/W0dzNqt1Turu66bmlYeIuXK1JXHtS6d15nYlxJx5m5fM3Sd3S8/yJ549e3vcQ1qUXW27W17ms58zcuWHzTk/ryrzZh8TJme7+15P1Ni4LwZQXM1u+5Pw/XSxY+VKPla/EyPQfD5TnNRlBNPaM5qDe3Zvb8TravSZMT5ckHBtWrppr0a2Z043cjmzna4AAenkAAFBCgUAWABABQAAABAAAHCKIUoIpAABLFgCFIAJYZiBlYsxslgZgx5jkwYpzkowjKcn0jFNsDGzucO4dm1EuXFBuvtTe0I/WRsnA/BjdT1T5V1WGL3f+59vojdNHo8cIqOOChCPRJJe4GiZPDEsGHJlk1knGKUI8r5E20uZp9a36nzbi3A5fEcpW23zNvufoXPhU4zj/MmvfsfO+N8PuT+Xp6GP1tljb5SWNN//AD7gtux01pH0aZtuDT7V5GctBF70Y+m3lquHhzb2O/p+CN02zYtNpEux6OLSD0nl5nC+FJPp0r3NgWJJdDk02FRRlIK83Bp05ytdX+h7mh4XHLHJiyJzg1GStv5Jra4vtt+R1cGHfobRoNP8OG/V7y9PJGnznds/peND4n4SzY7eJ/Fj5fZmv0fseBkxSi3GUXFrrGSaa9mfYzo6/huHMqy4oy9apr6PsdDB8noUbZxTwdJXLTz5l/657S+il0fuaxqdPPHJwyQlCS/hkmmEcQIWgAQAFBC2ABLAFAAAAEV1wCFRkLMbFgVkJZGwMrJZjYbApGyWYtgZWIptpRTbeySVtv6HPw7Q5NRPkxr1lJ/ZivNn0HwzwCGnTn9rI1Tm1+C8kNDXuD+D8uSpahvFF7/DSvK169o++/obtw7heHTxrFjUfVbyfq5dWdyEO5y9Cqwcei8+pz1SOOCt2ckiDBHj8d4daeSK/wB6X5nrma8iZY+pp6xy1dvn0tDT2RYaZp9DdNTwvHPdfK/To/Y8/LwnIuiUl6M5r87G+OcrXJ4q7HJglex7MtHLvja/4s41w/Je2Nv/AIs8ea97jrtmeODeyTbfZbuz0dPwXJJ3NqK8lu/wPY02lx4lUVv3k95M1x+dv6zyzk/HT4Zw3k+eaXN2j15fV+p6EmWTMDeTTC3ZENFQZUcbidPX8Px5o8mWCnHtezi/OL6o75i4gaFx/wAL/Bj8XC5Tgt5Qkk5Qj52uqNaPsE42af4l8Oqnlwxpq3KC6SXml2YRpwKQAALAFJYAoIUAQFIrrkYFlRCGTIBCBsjYEZi2VsxbIqNhW9lu3sl6kbPU8M6X4meNq1D5n9ewG6+GOFLDjSa+aXzTfr5GywjSo6uijSO9FHpGUF/UyoRM0iKxS7FkTG7t+rDYGKMiIMDJFsxRQMub/LF+hjQYGVkMUUACFABkK0ASLQQYGDRxZoWjlMMgHzfxPw/4Oa4qoZbkvJS7r9fc8Y33xZo/iYZNL5sfzr26/hZoQQIAAKEAAsAAUllIrq2SwColksADFsjZAQSzFsoCsWzcvBelqPO+s3ft2ALErd8K2/zqdqLtJrvuAVXJf4nJJ7X6WAQRKkYgAEUAAkCgAyAAVEKAIUACGRAAQydl57AASuxxz7v7gAOnqoWmn5M+Za/B8LLPH/JJpfTqvwogLUcAAIAAAAAAUAg//9k=' alt='Web testing' />
            </div>
            <div id="presentation-title">
                <p>About me</p>
            </div>
            <div id="presentation-description">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae repellendus adipisci, exercitationem ducimus delectus dicta illum possimus 
                    est rem qui voluptatum magni natus dolore 
                    ipsum consectetur officiis mollitia odio. Molestiae!
                </p>
            </div>
        </section>
    );
}