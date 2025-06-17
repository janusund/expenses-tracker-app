## Simple Expense App<br/>
A simple React Native app to tracker expenses<br/>



## Features<br/>
<ul>
    <li>Demonstrates use of navigation <a href="https://reactnavigation.org/docs/getting-started">React navigation</a></li>
    <li>Installed Navigation container package listed under <a href="https://reactnavigation.org/docs/navigation-container/">Navigation Container</a> used 
    as a wrapper for all other navigation components, to be installed with <br/>
    npm install @react-navigation/native<br/>
    npx expo install react-native-screens react-native-safe-area-context<br/>
</li>
    <li>Demonstrates use of Native Stack navigators listed under <a href="https://reactnavigation.org/docs/native-stack-navigator">Native Stack Navigators</a> to be installed using 
    npm install @react-navigation/native-stack</li>
    <li>Demonstrates use of Bottom Tab navigators listed under <a href="https://reactnavigation.org/docs/bottom-tab-navigator">Bottom tab Navigators</a>  to be installed using  
    npm install @react-navigation/bottom-tabs<br/>
    npx expo install react-native-gesture-handler react-native-reanimated</li>
    <li>Features include Manage Expense , List ALl Expense , List Recent Expense. The Manange Expense will be the main navigator so listed as a default Stack navigator and other navigators are nested.</li>
    <li>Demonstrates usage of useEffectLayout for updates to options of the screen for example title , button etc. </li>
    <li>Use context api to store information locally</li>
    <li>Use Fire base to store data and use restful apis <a href="firebase.google.com">FireBase</a>
        <ul>
            <li>Set up a new project  </li>
            <li>Set up a new real time database under the project  </li>
            <li>Set up rule to allow test access which is basically open to all  </li>
        </ul>
    </li>
    <li> Install Axios for rest api access; npm install axios</li>
    
</ul>


## ScreenShots<br/>


## Tech Stack<br/>
React Native<br/>
Expo <br/>

## Installation<br/>
git clone this repo<br/>
cd <DIRECTORY><br/>
npm install<br/>
npm start<br/>
Note: You’ll need Node.js, Expo CLI, and a mobile simulator or Expo Go app.<br/>

## Project Structure <br/>

/components      # Reusable UI components <br/>
 
/App.js          # Entry point  <br/>

/screens         # Screen layouts for Expense Tracker<br/>


