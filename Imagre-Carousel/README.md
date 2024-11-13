Image carousel
Medium
·
40 minutes
Question
Solutions10
Prompt
Create an image carousel that cycles through images fetched from an endpoint (displaying a new image every 3 seconds), and allows the user to skip to the next/previous image.

The example endpoint contains images within the response as follows:

{
  data: {
    children: [
      {
        data: {
          url_overridden_by_dest: "*.jpg"
        }
      },
      ...
    ]
  }
}
Below is a mockup of what the UI should look like (the carousel should be horizontally centered, with at least some top margin):

Question Link => https://frontendeval.com/questions/image-carousel