let navBar = false;
        function navBtnClicked() {
            const navLinks = document.getElementById('nav-links');
            const navLinksTags = document.getElementsByClassName('nav-links-tag');
            if (!navBar) {
                navLinks.style.display = 'flex';
                navLinks.style.height = "99vh";
                // navLinksTags.style.display = 'block';
                navBar = true;
            } else {
                navLinks.style.display = 'none';
                navLinks.style.height = "0vh";
                navBar = false;
            }
        }

        function getInformationHtml() {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;

            if (screenWidth < 768) {
                return `
                <div id="info_right"> <img src="./images/custom_profile_image.png" alt=""></div>
                <div id="info_left">
                    <div id="Dev_Name"><label for="">
                            <p style="color: #279EB8;">Hi, I'm</p> Hammad Rafique
                        </label></div>
                    <div id="Dev_preference"><label> Python Developer</label></div>
                    <div id="Dev_Desc"><label>I'm a Python developer with a passion for crafting clean and efficient code. I specialize in creating software solutions that solve real-world problems and enhance user experiences. From web applications to automation scripts, I love turning ideas into functional and user-friendly programs.</label></div>
                    <div id="Dev_Keywords"><label style="color: #279EB8;">#webdevelopment &nbsp;&nbsp;#webAutomation &nbsp;&nbsp;#machinelearning</label></div>
                    
                    <div id="Dev_Resume">
                        <a id="Dev_Resume_DownloadBtn" href="Hammad Rafique.pdf" download><button type="button" style="width: 90%;">Download Resume</button></a>
                        <div id="Social_Icons">
                            <a href="https://github.com/HammadRafique29"><img src="./images/github.png" class="social_icons" alt=""></a>
                            <a href="https://www.instagram.com/hammad_rafique1449/"><img src="./images/insta.png" class="social_icons" alt=""></a>
                            <a href="https://www.facebook.com/mhammad.rafiq.18/"><img src="./images/facebook.png" class="social_icons" alt=""></a>
                            <a href="https://www.linkedin.com/in/hammad-rafique-hr029/"><img src="./images/linkedin.png" class="social_icons" alt=""></a>
                        </div>
                    </div>
                </div>
                `;
            } else  {
                return `<div id="info_left">
                    <div id="Dev_Name"><label for="">
                            <p style="color: #279EB8;">Hi, I'm</p> Hammad Rafique
                        </label></div>
                    <div id="Dev_preference"><label> Python Developer</label></div>
                    <div id="Dev_Desc"><label>I'm a Python developer with a passion for crafting clean and efficient code. I specialize in creating software solutions that solve real-world problems and enhance user experiences. From web applications to automation scripts, I love turning ideas into functional and user-friendly programs.</label></div>
                    <div id="Dev_Keywords"><label style="color: #279EB8;">#webdevelopgitment &nbsp;&nbsp;#webAutomation &nbsp;&nbsp;#machinelearning</label></div>
                    <div id="Dev_Resume">
                        <a id="Dev_Resume_DownloadBtn" href="Hammad Rafique.pdf" download><button type="button" style="width: 90%;">Download Resume</button></a>
                        <div id="Social_Icons">
                            <a href="https://github.com/HammadRafique29"><img src="./images/github.png" class="social_icons" alt=""></a>
                            <a href="https://www.instagram.com/hammad_rafique1449/"><img src="./images/insta.png" class="social_icons" alt=""></a>
                            <a href="https://www.facebook.com/mhammad.rafiq.18/"><img src="./images/facebook.png" class="social_icons" alt=""></a>
                            <a href="https://www.linkedin.com/in/hammad-rafique-hr029/"><img src="./images/linkedin.png" class="social_icons" alt=""></a>
                        </div>
                    </div>
                </div>
                <div id="info_right"> <img src="./images/custom_profile_image.png" alt=""></div>`;
            } 
        }

        function updateHTML() {
            const htmlCode = getInformationHtml();
            document.getElementById('Information_').innerHTML = htmlCode;
            // Update your HTML code here with the new htmlCode
        }

        document.addEventListener('DOMContentLoaded', function () {
            updateHTML();
            window.addEventListener('resize', updateHTML);
        });