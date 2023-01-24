# shockbyte-test

## Project overview

The project was quite fun to do, a bit challenging on a couple of parts and components but overall it was quite enjoyable.

One of the things that I thought I didnt need at the beginning was a store. I only added it later just to make some data a bit simpler to pass around.

Here are a couple of things on the top of my head where the design and my app differs:

- One of the things that frutrated me and waste some considerable time trying to figure out was why i couldnt make the xaxis on the chart to show the lines like on the design. I tried searching for a solution for a while with no success.
- Also, while talking about the graph, i decided to leave the legend so the chart would be a bit more readable
- Not sure if it was by mistake, but the /registration endpoint was not giving out the overall/total values for the birds and eggs, i thought of a workaround but it would be a bit more timeconsuming and inneficient so i decided to just change the data to instead the "lastOccupationUpdate" 
- I made the pagination functional, but since the data is just on one page the page doesnt really reflect the design (But it can be tested if needed)
- Regarding the pagination, i wasnt sure if the pagination for the 3rd and 4th images was supposed to be the same as the one used on the 2nd image, but i figured it would make the most sense

I tried to buil the app somewhat faulty tolerant, with things like redirection if you modify to an unknown page and also the use of localstorage to try to save some data.

Hope you guys enjoy the work I did and if there's anything that you think I could've done better please be sure to let me know.

(Hope this was enough of an explanation of my thought process)
