const setCopyright = () => {
    const footer = document.querySelector('footer');
    const date = new Date();
    footer.innerHTML = `<p><small>© Jake Shandling ${date.getFullYear()}</small></p>`;
}

const hideIWasTheres = () => {
    const buttons = document.querySelectorAll('.bit-event-buttons');
    buttons.forEach(b => {
        if (b.firstChild.firstChild.innerText === "I Was There") {
            b.style.position = 'absolute';
            b.style.display = 'none';

        }
    });
}

const removeAnnoyingBandsInTownLinks = () => {
    const aED = document.querySelectorAll("a.bit-event, a.bit-details, a.bit-venue"); 
    aED.forEach((e) => {e.removeAttribute("href") ; e.removeAttribute("target");}); 
}

const getIsLoadedCallback = (selectorString) => (
    // check once whether the widget via selector string is loaded
   () => {
        const bitContainers = document.querySelectorAll(selectorString);
        if (bitContainers.length > 1) {
            console.log("There are multiple bit containers");
        }
        return bitContainers[0].childElementCount > 1;
    }
)

const getSetCheckIsLoadedInterval = (isLoadedCallback, whatToDo, interval) => (
    () => {
        // set an interval to check whether the element is loaded according to isLoadedCallback
        let intervalId;
        intervalId = setInterval(() => {
            if (isLoadedCallback()) {
                clearInterval(intervalId);
                whatToDo();
            }
        }, interval);
    }
);

const isBitPastEventsLoaded = getIsLoadedCallback(".bit-past-events");
const setBitPastEventsLoadedInterval = getSetCheckIsLoadedInterval(
    isBitPastEventsLoaded,
    () => {
        hideIWasTheres();
        removeAnnoyingBandsInTownLinks();
    },
    10
);

const setPastEventsOnClick = () => {
    document.querySelector(".bit-show-past").addEventListener('click', (e) => {
        setBitPastEventsLoadedInterval();
    })
};

const isBitLoaded = getIsLoadedCallback(".bit-widget");
const setBitLoadedInterval = getSetCheckIsLoadedInterval(
    isBitLoaded,
     () => {
        removeAnnoyingBandsInTownLinks(); 
        setPastEventsOnClick();
    },
    10
);

setBitLoadedInterval();

// document.addEventListener('DOMContentLoaded', () => {
//     setCopyright();
// });


