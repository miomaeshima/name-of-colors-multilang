## styled-components

yarn add styled-components
yarn add babel-plugin-styled-components --dev //makes class names more meaningful

then use `import styled from 'styled-components/macro'`

Add editor Julien Poissonier's `vscode-styled-components` plugin on VSCode

add resolution field in package.json (in case yarn is used.)

```
{
  "resolutions": {
    "styled-components": "^5"
  }
}
```

## Clean up eventlistner in useEffect hook

Inside of a useEffect hook

```
 const sendCanvasDataToGetColor = (event) => {
                let x = event.offsetX;
                let y = event.offsetY;
                let imageData = context.getImageData(x, y, 1, 1);
                let data = imageData.data;
                getColor(data);
            };
            canvas.addEventListener('click', sendCanvasDataToGetColor);

            //Clean up the above eventListner
            return () => {
                canvas.removeEventListener('click', sendCanvasDataToGetColor);
            };
```

Need the codes below to clean up the eventListner to avoid that eventListner with the previous language remaining after the language is changed. Otherwise there will be plural number of eventLisnters would run.
(Try comment out the return statement and see how the browser quickly renders multiple eventlisteners.)

###

background image credit
lee-jeffs-uasbgaRTInA-unsplash

### diamond icon attribution

 <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>


### background　は　pictureを使う。
Because image-set for media type is currently not supported widely, I used picture tag (html) instead of image-set (css). 
Elements that need to be in front of the background image have position:relative to ensure the right stacking order.
   
https://ics.media/entry/201001/