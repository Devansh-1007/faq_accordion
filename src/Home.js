import React from 'react'

const Home = () => {
    return (
        <div class="container">
            <div class="images">
                <div class="firstimage">
                    <img src="./images/illustration-box-desktop.svg" alt="" />
                </div>
                <div class="secondimage">
                    <img src="./images/illustration-woman-online-desktop.svg" alt="" />
                </div>
                <div class="thirdimage">
                    <img src="./images/bg-pattern-desktop.svg" alt="" />
                </div>
            </div>
            <div class="faq">
                <div class="Textcontainer">
                    <div class="questions">
                        <button id="style-buton">
                            <div class="bold">How many team members can I invite?</div>
                            <img src="./images/icon-arrow-down.svg" alt="" />
                        </button>
                    </div>
                    <div class="answers">
                        <span>
                            You can invite up to 2 additional users on the Free plan. There is no limit on
                            team members for the Premium plan.
                        </span>
                    </div>
                    <div class="questions">
                        <button id="style-buton">
                            <div class="bold">What is the maximum file upload size?</div>
                            <img src="./images/icon-arrow-down.svg" alt="" />
                        </button>
                    </div>
                    <div class="answers">
                        <span>
                            No more than 2GB. All files in your account must fit your allotted storage space.
                        </span>
                    </div>
                    <div class="questions">
                        <button id="style-buton">
                            <div class="bold">How do I reset my password?</div>
                            <img src="./images/icon-arrow-down.svg" alt="" />
                        </button>
                    </div>
                    <div class="answers">
                        <span>
                            Click “Forgot password” from the login page or “Change password” from your profile page.
                            A reset link will be emailed to you.
                        </span>
                    </div>
                    <div class="questions">
                        <button id="style-buton">
                            <div class="bold"> Can I cancel my subscription?</div>
                            <img src="./images/icon-arrow-down.svg" alt="" />
                        </button>
                    </div>
                    <div class="answers">
                        <span>
                            Yes! Send us a message and we'll process your request no questions asked.
                        </span>
                    </div>
                    <div class="questions">
                        <button id="style-buton">
                            <div class="bold"> Do you provide additional support?</div>
                            <img src="./images/icon-arrow-down.svg" alt="" />
                        </button>
                    </div>
                    <div class="answers">
                        <span>
                            Chat and email support is available 24/7. Phone lines are open during normal business hours.
                        </span>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Home