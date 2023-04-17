import React from "react";
import SponsorCompany from "../components/SponsorCompany";

const SponsorCompanyTest = () => {
  const sponsorCompanies = [
    {
      name: "Example Company 1",
      logoSrc: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80",
      websiteUrl: "https://example.com/1",
    },
    {
      name: "Example Company 2",
      logoSrc: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      websiteUrl: "https://example.com/2",
    },
    {
      name: "Example Company 3",
      logoSrc: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      websiteUrl: "https://example.com/3",
    },
    {
      name: "Example Company 1",
      logoSrc: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80",
      websiteUrl: "https://example.com/1",
    },
    {
      name: "Example Company 2",
      logoSrc: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      websiteUrl: "https://example.com/2",
    },
    {
      name: "Example Company 3",
      logoSrc: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      websiteUrl: "https://example.com/3",
    },
    {
      name: "Example Company 1",
      logoSrc: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80",
      websiteUrl: "https://example.com/1",
    },
    {
      name: "Example Company 2",
      logoSrc: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      websiteUrl: "https://example.com/2",
    },
    {
      name: "Example Company 3",
      logoSrc: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      websiteUrl: "https://example.com/3",
    },
    {
      name: "Example Company 1",
      logoSrc: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80",
      websiteUrl: "https://example.com/1",
    },
    {
      name: "Example Company 2",
      logoSrc: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      websiteUrl: "https://example.com/2",
    },
    {
      name: "Example Company 3",
      logoSrc: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg",
      websiteUrl: "https://example.com/3",
    },
  ];

  return (
    <div>
      <h1>Test</h1>
      <SponsorCompany companies={sponsorCompanies} />
    </div>
  );
};

export default SponsorCompanyTest
;
