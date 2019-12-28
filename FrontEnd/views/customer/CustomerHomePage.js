const testimonialList = document.getElementById('testimonialList');

export const HomePageViews = {
    addTestimonial: (imageURL, name, body) => {
        let listElement = ` <div>
                <div class="testimonial">
                    <figure class="mb-4">
                        <img src=${imageURL} alt="Image" class="img-fluid mb-3">
                        <p>${name}</p>
                    </figure>
                    <blockquote>
                        <p>${body}</p>
                    </blockquote>
                </div>
            </div>`;
        testimonialList.insertAdjacentHTML("afterend", listElement);
    }


};