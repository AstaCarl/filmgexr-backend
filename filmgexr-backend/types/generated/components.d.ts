import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutSectionImagesWithText extends Schema.Component {
  collectionName: 'components_about_section_images_with_texts';
  info: {
    displayName: 'title-paragraf';
    description: '';
  };
  attributes: {
    subtitle: Attribute.Text;
    paragraf: Attribute.Text;
  };
}

export interface AnchorArrowAnchor extends Schema.Component {
  collectionName: 'components_anchor_arrow_anchors';
  info: {
    displayName: 'arrowAnchor';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media;
    url: Attribute.String;
  };
}

export interface BenefitsBenefits extends Schema.Component {
  collectionName: 'components_benefits_benefits';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    subtitle: Attribute.Text;
    paragraf: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface CasesCases extends Schema.Component {
  collectionName: 'components_cases_cases';
  info: {
    displayName: 'Cases';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    video: Attribute.Media;
  };
}

export interface ClientsClients extends Schema.Component {
  collectionName: 'components_clients_clients';
  info: {
    displayName: 'Clients';
    description: '';
  };
  attributes: {
    logos: Attribute.Media;
    title: Attribute.String;
  };
}

export interface IconsSocials extends Schema.Component {
  collectionName: 'components_icons_socials';
  info: {
    displayName: 'Socials';
    description: '';
  };
  attributes: {
    url: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface InfoContactInfo extends Schema.Component {
  collectionName: 'components_contact_info_contact_infos';
  info: {
    displayName: 'contact-info';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface IntroductionIntroduction extends Schema.Component {
  collectionName: 'components_introduction_introductions';
  info: {
    displayName: 'introduction';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    paragraf: Attribute.Text;
  };
}

export interface LabelLabel extends Schema.Component {
  collectionName: 'components_label_labels';
  info: {
    displayName: 'Label';
    description: '';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface LinksLinks extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Links';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface LogoLogo extends Schema.Component {
  collectionName: 'components_logo_logos';
  info: {
    displayName: 'logo';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    brandName: Attribute.String;
    logo: Attribute.Media;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_link_menus';
  info: {
    displayName: 'Menu-link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface NavigationLinkFooterLink extends Schema.Component {
  collectionName: 'components_navigation_link_footer_links';
  info: {
    displayName: 'footerLink';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface NavigationLinkNavigationLink extends Schema.Component {
  collectionName: 'components_navigation_link_navigation_links';
  info: {
    displayName: 'navigation-link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface StepsSteps extends Schema.Component {
  collectionName: 'components_steps_steps';
  info: {
    displayName: 'Steps';
    description: '';
  };
  attributes: {
    subtitle: Attribute.String;
    paragraf: Attribute.Text;
    number: Attribute.Integer;
  };
}

export interface TeamMemberTeamMember extends Schema.Component {
  collectionName: 'components_team_member_team_members';
  info: {
    displayName: 'Team-member';
  };
  attributes: {
    profile: Attribute.Media;
    title: Attribute.String;
    subtitle: Attribute.Text;
  };
}

export interface TitleParagrafTitleParagraf extends Schema.Component {
  collectionName: 'components_title_paragraf_title_paragrafs';
  info: {
    displayName: 'Title paragraf';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    paragraf: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-section.images-with-text': AboutSectionImagesWithText;
      'anchor.arrow-anchor': AnchorArrowAnchor;
      'benefits.benefits': BenefitsBenefits;
      'cases.cases': CasesCases;
      'clients.clients': ClientsClients;
      'icons.socials': IconsSocials;
      'info.contact-info': InfoContactInfo;
      'introduction.introduction': IntroductionIntroduction;
      'label.label': LabelLabel;
      'links.links': LinksLinks;
      'logo.logo': LogoLogo;
      'menu.menu': MenuMenu;
      'navigation-link.footer-link': NavigationLinkFooterLink;
      'navigation-link.navigation-link': NavigationLinkNavigationLink;
      'steps.steps': StepsSteps;
      'team-member.team-member': TeamMemberTeamMember;
      'title-paragraf.title-paragraf': TitleParagrafTitleParagraf;
    }
  }
}
