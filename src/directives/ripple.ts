/* eslint-disable */
export default (el: any) => {

    // listen for click events to trigger the ripple
    el.addEventListener(
        "click",
        (e: any) => {
            // Setup
            const target = el.getBoundingClientRect();
            const buttonSize = target.width > target.height ? target.width : target.height;
            // remove any previous ripple containers
            var elements = document.getElementsByClassName("ripple");
            while (elements[0]) {
                elements[0].parentNode && elements[0].parentNode.removeChild(elements[0]);
            }

            // create the ripple container and append it to the target element
            var ripple = document.createElement("span");
            ripple.setAttribute("class", "ripple");
            el.appendChild(ripple);

            // set the ripple container to the click position and start the animation
            setTimeout(function () {
                ripple.style.width = buttonSize + "px";
                ripple.style.height = buttonSize + "px";
                ripple.style.top = e.offsetY - buttonSize / 2 + "px";
                ripple.style.left = e.offsetX - buttonSize / 2 + "px";
                ripple.setAttribute("class", "ripple ripple-effect");
            }, 100);
        },
        false
    )
};