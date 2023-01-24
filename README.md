# shockbyte-test

## Project overview

The project was quite fun to do, a bit challenging on a couple of parts and components but overall it was quite enjoyable.

One of the things that I thought I didnt need at the beginning was a store. I only added it later just to make some data a bit simpler to pass around.

First of all i took a look at the designs page to give me an idea of what i was gonna be building, then afterwards I navigated the swagger page to find what i was gonna be using and made my mind about most of the views and some components that i was gonna be needing, and started the building process, beginning with the most general of the screens; the home page. Then after styling some of the basic stuff up, i could go on with the second page, which required me to do a bit of a refactor, to include the sidebar and the footer so that all the space was neatly organized. After doing the components and veryfing that the api calls was working correctly I went on and do the template for the next page and rest a bit.

After that, i started with the pagination (footer) of the page and then started with the third and fourth screens. thats when i figured out i was gonna be needing a store so i installed pinia and kept on with the coding. I tried to be super carefull to have most of the styles, paddings and spaces correct and tried not to miss any of those. After finally finishing the third screen i went on and searched for a good chart to include into the proyect, i ended up using [apexchart](https://apexcharts.com/) and found it to be super cool to work with. Ten afterwards i cleaned the code a little bit and ended up writing this very Readme file and configuring the docker files.

Here are a couple of things on the top of my head where the design and my app differs:

- One of the things that frutrated me and waste some considerable time trying to figure out was why i couldnt make the xaxis on the chart to show the lines like on the design. I tried searching for a solution for a while with no success.
- Also, while talking about the graph, i decided to leave the legend so the chart would be a bit more readable
- Not sure if it was by mistake, but the /registration endpoint was not giving out the overall/total values for the birds and eggs, i thought of a workaround but it would be a bit more timeconsuming and inneficient so i decided to just change the data to instead the "lastOccupationUpdate" 
- I made the pagination functional, but since the data is just on one page the page doesnt really reflect the design (But it can be tested if needed)
- Regarding the pagination, i wasnt sure if the pagination for the 3rd and 4th images was supposed to be the same as the one used on the 2nd image, but i figured it would make the most sense

I tried to buil the app somewhat faulty tolerant, with things like redirection if you modify to an unknown page and also the use of localstorage to try to save some data.

Hope you guys enjoy the work I did and if there's anything that you think I could've done better please be sure to let me know.

Also, this was my first time working directly with docker (I had already consumed it but never built anything with it) so it also took a bit of time to learn the setup, that being said i hope it can run with no problems with the command: 
```docker-compose up```

(Hope this was enough of an explanation of my thought process)
