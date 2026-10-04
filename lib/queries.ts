export const siteSettingsQuery = `
  *[_type == "siteSettings"][0]{
    brandName,
    tagline,
    logo,

    navigation[]{
      label,
      href
    },

    primaryCta{
      label,
      url,
      openInNewTab
    },

    floatingCta{
      enabled,
      label,
      url,
      mobileLabel
    },

    contact{
      hotelEmail,
      guestEmail,
      whatsapp,
      instagram,
      linkedin,
      youtube
    },

    footer{
      statement,
      description,
      location,

      exploreLinks[]{
        label,
        href
      },

      connectLinks[]{
        label,
        href,
        openInNewTab
      },

      newsletter{
        enabled,
        heading,
        description,
        placeholder,
        consentText
      },

      legalLinks[]{
        label,
        href
      },

      copyright
    }
  }
`;


export const homePageQuery = `
  *[_type == "homePage"][0]{

    hero{
      desktopImage,
      mobileImage,
      eyebrow,
      headingLineOne,
      headingLineTwo,
      description,

      cta{
        label,
        url,
        openInNewTab
      },

      problems,
      bottomMessage
    },


    philosophy{
      image,
      eyebrow,
      heading,
      paragraphOne,
      paragraphTwo,
      signatureLineOne,
      signatureLineTwo,

      compass{
        top,
        bottom,
        left,
        right
      }
    },


    journey{
      eyebrow,
      heading,
      subtitle,

      stages[]{
        number,
        title,
        statement,
        microcopy,
        image,
        imageText,

        services[]{
          icon,
          label
        }
      },

      bottomMessage{
        eyebrow,
        heading,
        highlight,
        description,
        steps
      }
    },


    services{
      eyebrow,
      headingLineOne,
      headingLineTwo,
      headingLineThree,
      description,

      heroImage,
      heroImageTextLineOne,
      heroImageTextLineTwo,
      heroImageHighlight,

      items[]{
        title,
        description,
        icon
      }
    },


    portfolio{
      intro{
        eyebrow,
        headingLineOne,
        headingLineTwo,
        headingLineThree,
        description,
        signatureLineOne,
        signatureLineTwo,
        backgroundImage,
        philosophyLabels,
        bottomSignature,
        bottomSignatureText
      },

      coreStrengths{
        eyebrow,
        heading,
        description,

        items[]{
          number,
          symbol,
          title,
          description
        },

        cornerWords
      },

      selectedExperience{
        eyebrow,
        headingItems,
        sideLabelOne,
        sideLabelTwo,
        description,

        items[]{
          number,
          title,
          subtitle,
          description
        }
      },

      finalStatement{
        backgroundImage,
        labels,
        quoteLineOne,
        quoteLineTwo,
        quoteLineThree,
        signature
      }
    },


    cta{
      eyebrow,

      keywords,

      headingLineOne,
      headingLineTwo,
      headingHighlight,

      description,

      benefits[]{
        icon,
        lineOne,
        lineTwo
      },

      primaryButton{
        label,
        url,
        openInNewTab
      },

      secondaryButton{
        label,
        url,
        openInNewTab
      },

      handwrittenLineOne,
      handwrittenLineTwo,

      bottomLeftText,
      bottomBrand,
      bottomTagline
    }

  }
`;
export const aboutPageQuery = `
  *[_type == "aboutPage"][0]{
    hero{
      backgroundImage,
      eyebrow,
      headingLineOne,
      headingLineTwo,
      headingHighlight,
      description,
      ctaLabel,
      ctaUrl,
      sideMessage
    },

    beginning{
      eyebrow,
      heading,
      description,
      quote,
      cards[]{
        number,
        title,
        text,
        image
      }
    },

    nameMeaning{
      eyebrow,
      headingLineOne,
      headingLineTwo,
      meaning,
      description,
      journeyStages,
      backgroundImage
    },

    raahiiWay{
      eyebrow,
      heading,
      description,
      values[]{
        icon,
        title,
        text,
        services
      }
    },

    beliefs{
      eyebrow,
      headingLineOne,
      headingLineTwo,
      items,
      image
    },

    building{
      eyebrow,
      heading,
      description,
      stages[]{
        number,
        label,
        title,
        text
      }
    },

    people{
      eyebrow,
      heading,
      sideText,
      members[]{
        image,
        name,
        role,
        text,
        profileUrl
      }
    },

    howWeWork{
      eyebrow,
      heading,
      steps[]{
        icon,
        title,
        text
      }
    },

    world{
      eyebrow,
      heading,
      description,
      items[]{
        image,
        label
      }
    },

    companion{
      eyebrow,
      heading,
      description,
      journeyLine,
      cardEyebrow,
      steps[]{
        number,
        title,
        text
      }
    },

    future{
      eyebrow,
      heading,
      timeline[]{
        year,
        text
      },
      closingLine
    },

    finalCta{
      backgroundImage,
      eyebrow,
      headingLineOne,
      headingHighlight,
      description,
      primaryButton{
        label,
        url,
        openInNewTab
      },
      secondaryButton{
        label,
        url,
        openInNewTab
      },
      bottomBrand,
      bottomTagline,
      bottomMessage
    }
  }
`;
export const experiencePageQuery = `
  *[_type == "experiencePage"][0]{

    hero{
      backgroundImage,
      eyebrow,
      headingLineOne,
      headingLineTwo,
      headingHighlight,
      taglineLineOne,
      taglineLineTwo,
      description,

      primaryButton{
        label,
        url,
        openInNewTab
      },

      secondaryButton{
        label,
        url,
        openInNewTab
      },

      sideLabels
    },

    packagesSection{
      eyebrow,
      headingLineOne,
      headingHighlight,
      description
    },

    packages[]{
      number,
      icon,
      title,
      subtitle,
      points,
      price,
      cta,
      ctaUrl,
      image,
      featured
    },

    interestsSection{
      eyebrow,
      headingLineOne,
      headingHighlight,
      description
    },

    interests[]{
      title,
      places,
      image,
      icon,
      url
    },

    moodSection{
      eyebrow,
      headingLineOne,
      headingLineTwo,
      description
    },

    moods[]{
      title,
      description,
      icon,
      image,
      url
    },

    promise{
      backgroundImage,
      eyebrow,
      headingLineOne,
      headingLineTwo,
      highlight,

      stages[]{
        number,
        title,
        description
      }
    },

    hotelIntegration{
      eyebrow,
      headingLineOne,
      headingLineTwo,
      headingHighlight,
      description,
      buttonLabel,
      buttonUrl,
      backgroundImage,
      qrImage,
      qrHeadingLineOne,
      qrHeadingLineTwo,
      qrDescription,
      qrLocations
    },

    bookingFlow{
      eyebrow,
      heading,

      steps[]{
        number,
        lineOne,
        lineTwo
      }
    },

    finalCta{
      backgroundImage,
      eyebrow,
      headingLineOne,
      headingHighlight,
      description,

      primaryButton{
        label,
        url,
        openInNewTab
      },

      secondaryButton{
        label,
        url,
        openInNewTab
      },

      sideMessage
    },

    bottomStrip{
      brand,
      label,
      statement,
      location
    }
  }
`;
export const contactPageQuery = `
  *[_type == "contactPage"][0]{
    hero{
      backgroundImage,
      eyebrow,
      headingLineOne,
      headingLineTwo,
      headingHighlight,
      description,
      sideMessage
    },

    journeySelection{
      eyebrow,
      headingLineOne,
      headingHighlight,
      description,

      hotelCard{
        image,
        eyebrow,
        icon,
        headingLineOne,
        headingLineTwo,
        highlight,
        description,
        buttonLabel,
        bottomLabel
      },

      guestCard{
        image,
        eyebrow,
        icon,
        headingLineOne,
        headingLineTwo,
        highlight,
        description,
        buttonLabel,
        bottomLabel
      },

      bottomStatement{
        lineOne,
        lineTwo,
        lineThree
      }
    },

    hotelPath{
      eyebrow,
      headingLineOne,
      headingHighlight,
      description,

      servicesLabel,
      servicesHint,

      services[]{
        number,
        title,
        description
      },

      propertyDetailsLabel,
      goalsLabel,
      goals[],

      businessLabel,
      budgetOptions[],
      marketingSetupOptions[],
      sourceOptions[],

      messageLabel,
      messagePlaceholder,

      submitHeading,
      submitDescription,
      submitButton,

      success{
        eyebrow,
        title,
        description,
        buttonText,
        buttonHref
      }
    },

    guestPath{
      eyebrow,
      headingLineOne,
      headingLineTwo,
      headingLineThree,
      headingLineFour,
      description,

      helpLabel,

      helpOptions[]{
        icon,
        title,
        text
      },

      detailsLabel,

      messageLabel,
      messagePlaceholder,

      timingLabel,
      timingOptions[],

      communicationLabel,
      communicationOptions[],

      submitHeading,
      submitDescription,
      submitButton,

      success{
        eyebrow,
        title,
        description,
        buttonText,
        buttonHref
      },

      urgentHelp{
        eyebrow,
        heading,
        description,
        buttonLabel
      }
    },

    directContact{
      eyebrow,

      cards[]{
        icon,
        title,
        value,
        url,
        action
      }
    },

    finalCta{
      backgroundImage,
      eyebrow,
      headingLineOne,
      headingLineTwo,
      headingHighlight,
      description,

      primaryButton{
        label
      },

      secondaryButton{
        label,
        url
      },

      brand,
      tagline,
      bottomMessage
    }
  }
`;
export const servicesPageQuery = `
  *[_type == "servicesPage"][0]{
    hero{
      backgroundImage,
      eyebrow,
      headingLineOne,
      headingLineTwo,
      headingHighlight,
      description,
      primaryButton{
        label,
        url,
        openInNewTab
      },
      secondaryButton{
        label,
        url,
        openInNewTab
      },
      sideMessage
    },

    servicesSection{
      eyebrow,
      headingLineOne,
      headingHighlight,
      description
    },

    services[]{
      number,
      icon,
      title,
      description,
      image,
      url
    },

    finalCta{
      backgroundImage,
      eyebrow,
      headingLineOne,
      headingHighlight,
      description,
      primaryButton{
        label,
        url,
        openInNewTab
      },
      secondaryButton{
        label,
        url,
        openInNewTab
      }
    }
  }
`;