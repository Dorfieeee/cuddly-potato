const jsonld = {
                  "@context": "http://schema.org/",
                  "@type": "Plumber",
                  "name": "Rosendorf",
                  "email": "rosendorf.instalater@gmail.com",
                  "founder": {
                    "type": "Person",
                    "name": "Josef Rosendorf",
                    "givenName": "Josef",
                    "familyName": "Rosendorf",
                    "jobTitle": "Instalatér"
                  },
                  "logo": "https://rosendorf-instalater.cz/img/logo.svg",
                  "image": "https://lh5.googleusercontent.com/p/AF1QipOMz_DrMfTmwDqMp6GqXWDfvgAVjSjUzEYEnLBT=w426-h240-k-no",
                  "telephone": "+420 777 100 103",
                  "url": "rosendorf-instalater.cz",
                  "sameAs": [
                     "https://www.starofservice.cz/profesional/instalaterstvi/spesov/440109853/rosendorf-instalater",
                     "https://www.mistriremesel.cz/profil/H290540",
                    "https://www.ekatalog.cz/firma/139989-rosendorf-instalater/",
                    "https://www.mistriremesel.cz/profil/T934030",
                    "https://www.firmy.cz/detail/13323681-rosendorf-voda-topeni-plyn-spesov.html",
                    "https://rosendorf.sluzby.cz/"
                  ],
                  "description": "Firma Rosendorf podniká v oboru instalatérsví -- topenářství, vodoinstalace, plynoinstalace a kanalizace, na území okresu Blansko a Brno",
                    "address": {
                     "@type": "PostalAddress",
                     "streetAddress": "Spešov 33",
                     "addressLocality": "Spešov",
                     "addressRegion": "Okres Blansko",
                     "postalCode": "679 02",
                     "addressCountry": "Česká Republika"
                  },
                  "geo": {
                     "@type": "GeoCoordinates",
                     "latitude": "49.394791",
                     "longitude": "16.629290"
                  },
                  "hasMap": "https://www.google.co.uk/maps/place/Rosendorf+-+Voda+%E2%80%A2+Topen%C3%AD+%E2%80%A2+Plyn/@49.394545,16.6092094,14z/data=!4m9!1m2!2m1!1sinstalater+spesov!3m5!1s0x471289372a0f7757:0x542f603493354c1d!8m2!3d49.394545!4d16.6267189!15sChFpbnN0YWxhdGVyIHNwZXNvdloTIhFpbnN0YWxhdGVyIHNwZXNvdpIBB3BsdW1iZXI",
                   "openingHours": "Mo 07:00-17:00 Tu 07:00-17:00 We 07:00-17:00 Th 07:00-17:00 Fr 07:00-17:00",
                  "areaServer": {
                    "type": "GeoCircle",
                    "geoMidpoint": {
                      "type": "GeoCoordinates",
                      "latitude": "49.394791",
                      "longitude": "16.629290"
                    },
                    "geoRadius": "25000"
                  }
               }

export default jsonld
