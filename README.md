# Spin the fikawheel
Denna applikationens syfte är att ge en daglig användare av bibliotekssystemet, som min grupp har utvecklat, en kaffe och en bulle i biblioteket. Den hämtar alla användare som ligger lagrade i databasen till biblioteket och väljer ut en slumpmässig index som sedan hämtar användaren på den platsen i en array. Sedan visas en animation av ett snurrande hjul med alla användare som stannar på den index som har valts som vinnare.


## Hur man kör
Projektet finns tillgängligt på min Github via denna länk: https://github.com/callebulow13/ReactSOS100 . Där finns även mitt API UserService som är skrivet i .NET, både det och denna reactapplikation som är skapat i vs code behöver klonas. Det behöver vara igång samtidigt på port 5196 för att kunna hämta användare som visas i det snurrande hjulet. I terminalen behöver det köras 'npm install' ,för att ladda ner alla paket som exempelvis det snurrande hjulet, och sedan 'npm run dev' för att köra projektet. 

## Ai-användning
Generativ Ai har använts för att ta fram ett hjul som snurrar, den har även hjälpt till med vissa variabler och felsökning i början av skapandet. Jag har sedan modifierat designen med hjälp av klassisk css, men fått lite hjälp att modifiera hjulet direkt i jsx. Det resterande har skapats med hjälp av guider i kursmaterialet. 
