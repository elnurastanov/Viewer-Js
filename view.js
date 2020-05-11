

const gallery = new Viewer(
    document.getElementById('images'),
    {
        inline: false,
        button: false,
        navbar: false,
        title: false,
        toolbar: false,
        keyboard: false
    }
);

const btn = document.getElementById('preview');
const imageNumber = document.getElementById('imgNumber');

const viewWithNumber = (value) => {

    const viewer = new Viewer(document.getElementById(value), {
        inline: false,
        button: false,
        navbar: false,
        title: false,
        toolbar: false,
        keyboard: false,
        viewed() {
            viewer.zoomTo(0.3);
          },
    })

    return viewer.show();

}

btn.addEventListener('click', () => { viewWithNumber(imageNumber.value) })