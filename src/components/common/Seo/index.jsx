import React from "react";
import Helmet from "react-helmet";
import Thumbnail from "assets/thumbnail/thumbnail.png";
import {
	url,
	defaultDescription,
	social,
	defaultTitle,
	socialLinks,
	address,
	contact,
	legalName,
	foundingDate,
	logo,
} from "data/config";

export const Seo = ({
	title = defaultTitle,
	description = defaultDescription,
	location = "",
}) => {
	const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${address.city}",
			"addressRegion": "${address.region}",
			"addressCountry": "${address.country}",
			"postalCode": "${address.zipCode}"
		},
		"sameAs": [
			"${socialLinks.twitter}",
			"${socialLinks.google}",
			"${socialLinks.youtube}",
			"${socialLinks.linkedin}",
			"${socialLinks.instagram}",
			"${socialLinks.github}"
		]
  	}`;

	return (
		<Helmet>
			<meta name="description" content={description} />
			<meta name="image" content={Thumbnail} />

			<meta property="og:url" content={`${url}${location}/?ref=smakosh.com`} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={Thumbnail} />
			<meta property="fb:app_id" content={social.facebook} />

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:creator" content={socialLinks.twitter} />
			<meta name="twitter:site" content={social.twitter} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image:src" content={Thumbnail} />
			<script type="application/ld+json">{structuredDataOrganization}</script>
			<link rel="publisher" href={socialLinks.google} />
			<title>{title}</title>
			<html lang="en" dir="ltr" />
			{<><script type="text/javascript"
				dangerouslySetInnerHTML={{
					__html: `
	setTimeout(function(){
		(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
		m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.defer=1,k.src=r,a.parentNode.insertBefore(k,a)})
		(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
	  
		ym(83027727, "init", {
			defer: true,
			clickmap:true,
			trackLinks:true,
			accurateTrackBounce:true,
			webvisor:true,
			trackHash:true
		});
   }, 5000);
    `,
				}} /><noscript><div><img src="https://mc.yandex.ru/watch/64917802" style="position:absolute; left:-9999px;" alt="" /></div></noscript></>}

		</Helmet>
	);
};
