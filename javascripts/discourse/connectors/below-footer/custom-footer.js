const getClassName = (text) => {
  return text.toLowerCase().replace(/\s/g, "-");
};

export default {
  setupComponent() {
    try {
      const splitSocialLinks = settings.social_links.split("|").filter(Boolean);

      const socialLinksArray = [];

      splitSocialLinks.forEach((link) => {
        const fragments = link.split(",").map((fragment) => fragment.trim());
        const text = fragments[0];
        const className = getClassName(text);
        const title = fragments[1];
        const href = fragments[2];
        const target = fragments[3] === "blank" ? "_blank" : "";
        const icon = fragments[4].toLowerCase();

        const socialLinkItem = {
          text,
          className,
          title,
          href,
          target,
          icon,
        };
        socialLinksArray.push(socialLinkItem);
      });


      this.setProperties({
        blurb: settings.blurb,
        customer_logo: settings.customer_logo,
        email: settings.email,
        phone: settings.phone,
        street: settings.street,
        location: settings.location,
        newsLetter: settings.news_letter,
        newsLetter_link: settings.news_letter_link,
        haylar_logo: settings.haylar_logo,
        socialLinks: socialLinksArray,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(
        "There's an issue in the Easy Footer Component. Check if your settings are entered correctly",
        error
      );
    }
  },
};