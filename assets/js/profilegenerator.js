/* 
    Created by: Nigel Diaz
    Created on: June 10, 2021
    Last updated on: June 21, 2021
*/
//declaration of global variables
const firstNames = ["Olivia", "Emma", "Charlotte", "Liam", "Aiden", "Elijah", "Oliver", 
    "Sophia", "Amelia", "Isabella", "Clinton", "Lucas", "Benjamin", "Victoria", "Regina", 
    "Adrianna", "Daniel", "Jack", "Alexander", "Emily", "Amanda", "Addison", "Ethan", 
    "Martin", "Bryce", "Gavreel", "Scarlett", "Dylan", "Vivienne", "Patrick", "Nolan", 
    "Declan", "Eloise", "Angelica", "Zachary", "Nicanor", "Kathleen", "Calista", "Darwin", 
    "Harley", "Benedict", "Rowan", "Dejerius", "Decovon", "Gerrika", "Matthew", "Edmund", 
    "Greta", "Dwight", "Alden", "Richard", "Chantria", "Mercedes", "Geoffrey", "Jeremiah", 
    "Brantley", "Alaysia", "Goldwyn", "Eileen", "Howard", "Adam", "Ryan", "Braeden", 
    "Gerard", "Nathaniel", "Mark", "Peter", "Michael", "Mary", "Reginald", "Terrence", 
    "Annabelle", "Geneva", "Georgia", "Leslie", "Rebecca", "Annie", "Cameron", "Sheldon", 
    "Lawrence", "Millicent", "Claire", "Dominic", "Ronald", "Abigail", "Hannah", "Deborah", 
    "Delilah", "Elizabeth", "Martha", "Bethany", "Samson", "Timothy", "Andrew", "Cassius"];
const lastNames = ["Thatcher", "Johnston", "Grayson", "Thorne", "Clarke", "Lee", "Patel", 
    "Wellington", "Anderson", "Campbell", "Carlson", "Alarcon", "Mathis", "Ross", "Wong", 
    "Porter", "Rogers", "Morris", "dela Cruz", "Garcia", "Reyes", "Ramos", "Mendoza", 
    "Santos", "Fernandez", "de Guzman", "del Rosario", "Hernandez", "Gallagher", "Lewis", 
    "Harrison", "Graham", "Townsend", "Randolph", "Parker", "Chapman", "Frias", "Donovan", 
    "Farrow", "Roderick", "Faulkerson", "Cummings", "van Barneveld", "Van Buren", "Sinclair", 
    "Bowers", "Underwood", "Bladell", "Armstrong", "Huggens", "Barnard", "de Villa", 
    "Metzger", "Lemasters", "Preston", "MacBride", "Yaleman", "Millard", "Villagracia", 
    "Arbann", "Kaizer", "Mercado", "Tan", "Cox", "Singh", "Khan", "Chen", "Yang", "Mohammed", 
    "Brahms", "Wallis", "Sheppard", "McCowan", "Lawrence", "McGregor", "Torrance", "Sheldon", 
    "Wilkes", "Cameron", "Decovon", "Bennigan", "Benavidez", "Williams", "Butler", "Burriss", 
    "Fabito", "Davenport", "Marquez", "Dankworth", "MacQuoid", "Featheringham", "Javernick"];
const profilePictures = ["profilepic01.jpg", "profilepic02.jpg", "profilepic03.jpg", "profilepic04.jpg", 
    "profilepic05.jpg", "profilepic06.jpg", "profilepic07.jpg", "profilepic08.jpg", "profilepic09.jpg", 
    "profilepic10.jpg", "profilepic11.jpg", "profilepic12.jpg"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"]; 
const quebecCities = ["Montréal", "Québec City"];
const ontarioCities = ["Niagara Falls", "Toronto", "Ottawa"];
const britishColumbiaCitires = ["Victoria", "Vancouver"];
const albertaCities = ["Calgary", "Edmonton"];
const provinces = [["Québec", quebecCities], ["Ontario", ontarioCities], ["British Columbia", 
    britishColumbiaCitires], ["Alberta", albertaCities]];
const montrealAreaCodes = ["514", "438"];
const quebecCityAreaCodes = ["418"];
const niagaraFallsAreaCodes = ["905", "289", "365"];
const torontoAreaCodes = ["416", "647", "437"];
const ottawaAreaCodes = ["343", "613"];
const victoriaAreaCodes = ["250", "672", "778", "236"];
const vancouverAreaCodes = ["604", "778", "250", "236"];
const calgaryAreaCodes = ["403", "587"];
const edmontonAreaCodes = ["780", "825"];
const emailProviders = ["gmail.com", "yahoo.com", "outlook.com", "icloud.com", "email.com"];
const occupations = ["Medical Doctor", "Dentist", "Optometrist", "Nurse", "Software Engineer", 
    "Electrical Engineer", "Mechanical Engineer", "Police Officer", "Paramedic", "Firefighter", 
    "Pharmacist", "Construction Worker", "Veterinarian", "Financial Advisor", "Bus Driver", 
    "Web Developer", "News Reporter", "Artist", "Musician", "Social Service Worker", "Pilot", 
    "Flight Attendant", "Barber", "Teacher", "Professor"];
const hobbies = ["drawing", "painting", "cooking", "listening to music", "snowboarding", "skiing", 
    "singing", "playing baseball", "playing soccer", "playing hockey", "playing tennis", "reading books", 
    "playing the piano", "playing the guitar", "playing the violin", "flying kites", "flying drones", 
    "working out", "playing video games", "playing board games", "going on adventures", "going on hikes", 
    "going to the beach", "going to the mall", "going on road trips", "watching anime", "watching sports", 
    "watching horror movies", "watching funny YouTube videos", "crocheting", "cosplaying", "doing yoga", 
    "doing zumba", "playing chess", "learning about other cultures", "learning about science", 
    "learning about world history", "learning other languages", "doing arts n' crafts"];
const fanbases = ["Toronto Maple Leafs", "Toronto Blue Jays", "Toronto FC", "Vancouver Canucks", 
    "Vancouver Mounties", "Saskatchewan Roughriders", "Montreal Canadiens", "Winnipeg Jets", "Star Wars", 
    "Game of Thrones", "The Walking Dead", "Harry Potter", "Star Trek", "The Lord of the Rings", 
    "Once Upon A Time", "Marvel", "DC", "Disney", "The Hunger Games", "Divergent", "Twilight", "Pokémon"];
const quotes = ["\"We are what we think. All that we are arises with our thoughts. With our thoughts, "
    +"we make the world.\" -Gautama Buddha", "\"The way to get started is to quit talking and begin doing.\" "
    +"-Walt Disney", "\"Spread love everywhere you go. Let no one ever come to you without leaving happier.\" "
    +"-Mother Teresa", "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\" "
    +"-Nelson Mandela", "\"Life is either a daring adventure or nothing at all.\" -Helen Keller", 
    "\"In a gentle way, you can shake the world.\" -Mahatma Gandhi", "\"Be strong and courageous. Do not be "
    +"frightened or dismayed, for the Lord your God is with you wherever you go.\" -Joshua 1:9", 
    "\"The light shines in the darkness, and the darkness has not overcome it.\" -John 1:5"];
const volunteerWork = ["local food bank", "homeless shelter", "animal rescue shelter", "library", 
    "retirement home", "community center", "church", "tutoring program", "summer camp"];
//generates and returns random number
var randomNum = function(min, max) {
    return Math.round(Math.random() * (max - min) + min); 
}
//selects and returns a random value from a passed array
var select = function(array) {
    let min = 0;
    let max = array.length - 1;        
    let num = randomNum(min, max);
    return array[num];
}
//generates and returns profile pic
var generateProfilePic = function() {
    return "assets/img/"+select(profilePictures);
}
//declare variable for profile pic
const profilePic = generateProfilePic();
//ensures correct articles are used in a sentence
var grammarCheck = function(sentence, keyWord) {
    keyWord = keyWord.toLowerCase();
    if(keyWord.substring(0, 1) === "a" || keyWord.substring(0, 1) === "e" ||
        keyWord.substring(0, 1) === "i" || keyWord.substring(0, 1) === "o" ||
        keyWord.substring(0, 1) === "u")
    {
        return sentence.replace(' a ', ' an ')
    } else {
        return sentence;
    }
}
//generates and returns birth date
var generateDOB = function() {
    const currentYear = new Date().getFullYear();
    return select(months)+" "+randomNum(1, 30)+", "
        +randomNum(currentYear-65, currentYear-18);
}
//generates and returns location
var generateAddress = function() {
    const address = select(provinces);
    const province = address[0];
    const city = select(address[1]);
    return city+", "+province;
}
//declare variable for address
const address = generateAddress();
//generates and returns phone number
var generatePhoneNum = function() {
    var areaCodes = [];
    if(address.includes("Montréal")) {
        areaCodes = montrealAreaCodes;
    } else if(address.includes("Québec City")) {
        areaCodes = quebecCityAreaCodes;
    } else if(address.includes("Niagara Falls")) {
        areaCodes = niagaraFallsAreaCodes;
    } else if(address.includes("Toronto")) {
        areaCodes = torontoAreaCodes;
    } else if(address.includes("Ottawa")) {
        areaCodes = ottawaAreaCodes;
    } else if(address.includes("Victoria")) {
        areaCodes = victoriaAreaCodes;        
    } else if(address.includes("Vancouver")) {
        areaCodes = vancouverAreaCodes;
    } else if(address.includes("Calgary")) {
        areaCodes = calgaryAreaCodes;
    } else if(address.includes("Edmonton")) {
        areaCodes = edmontonAreaCodes;
    } else {
        areaCodes = ["418", "204", "902", "306"]
    }
    return "1-"+select(areaCodes)+"-"+randomNum(100, 999)+"-"+randomNum(1000, 9999);
}
//declare variables for name, birth date, and phone number
const firstName = select(firstNames);
const lastName = select(lastNames).replace(firstName, select(lastNames));
const dateOfBirth = generateDOB();
const phoneNum = generatePhoneNum();
const phoneNumLink = "tel:"+phoneNum;
//generates and returns age based on birth date
var generateAge = function() {
    var age;
    const currentDate = new Date();
    const birthDate = new Date(dateOfBirth);
    age = currentDate.getFullYear() - birthDate.getFullYear();
    if(currentDate.getMonth() === birthDate.getMonth()) {
        if(currentDate.getDate() < birthDate.getDate())
        {
            age = age-1;
        }
    } else if(currentDate.getMonth() < birthDate.getMonth()) {
        age = age-1;
    }
    return age;  
}
//declare variable for age
const age = generateAge();
//generates and returns nickname
var generateNickname = function(firstName) {
    if(firstName.length < 5) {
        return firstName.substring(0, 1);
    } else {
        return firstName.substring(0, 3);
    }
}
//generates and returns email address
var generateEmail = function(firstName, lastName) {
    const option = randomNum(0, 4);
    if(option === 0) {
        return firstName+lastName.replace(' ','')
            +dateOfBirth.substring(dateOfBirth.length-4, dateOfBirth.length) 
            +"@"+select(emailProviders);
    } else if(option === 1) {
        return firstName+"."+lastName.replace(' ','')
            +dateOfBirth.substring(dateOfBirth.length-2, dateOfBirth.length) 
            +"@"+select(emailProviders);
    } else if(option === 2) {
        return firstName.substring(0, 1)+lastName.replace(' ','')+randomNum(1, 9)
            +"@"+select(emailProviders);            
    } else if(option === 3) {
        return firstName+lastName.substring(0, 1)+randomNum(1, randomNum(9, 99999))
            +"@"+select(emailProviders);
    } else if(option === 4) {
        return generateNickname(firstName)+lastName.replace(' ','')+randomNum(1, 999)
            +"@"+select(emailProviders);
    }
}
//declare variables for email address
const email = generateEmail(firstName, lastName).toLowerCase();
const emailLink = "mailto:"+email;
//generates and returns a sentence about career or education
var sentence1 = function(firstName, lastName) {
    const option = randomNum(0, 3);
    const occupation = select(occupations).toLowerCase();
    if(occupation === "medical doctor" || occupation === "dentist" || 
        occupation === "optometrist" || occupation === "veterinarian")
    {
        if(option < 2) {
            return "I am Dr. "+lastName+", and I am a passionate "+occupation+". ";
        } else {
            return "I'm Dr. "+lastName+", and I have "+randomNum(2, randomNum(3, age/1.5))
                    +grammarCheck(" years of experience as a ", occupation)+occupation+". ";
        }
    } else {
        if(option === 0) {
            return "My name is "+firstName+", but you can call me "+generateNickname(firstName)
                +grammarCheck(". I am a ", occupation)+occupation+"! ";
        } else if(option === 1) {
            return "I am "+firstName+", and I am a dedicated "+occupation+". ";
        } else if(option === 2) {
            return grammarCheck("I have been working as a ", occupation)+occupation+" for "+randomNum(2, randomNum(
                3, age/1.5))+" years. ";
        } else if(option === 3) {
            const option2 = randomNum(0, 2);
            if(option2 === 0) {
                return "I am "+firstName+", and I'm an aspiring "+occupation+". ";
            } else if (option2 === 1) {
                return grammarCheck("I'm currently studying to be a ", occupation)+occupation+" one day. ";
            } else if (option2 === 2) {
                return grammarCheck("I'm a student who hopes to be a ", occupation)+occupation+" after I graduate from my "
                    +randomNum(1, 4)+"-year program. ";
            }             
        }
    }        
}
//generates and returns up to three hobbies 
var generateHobbies = function() {
    const option = randomNum(0, 2);
    const hobby1 = select(hobbies);
    const hobby2 = select(hobbies).replace(hobby1, select(hobbies));
    const hobby3 = select(hobbies).replace(hobby1, select(hobbies)).replace(hobby2, select(hobbies));
    const hobby4 = select(hobbies).replace(hobby1, select(hobbies)).replace(hobby2, select(hobbies))
        .replace(hobby3, select(hobbies));
    if(option === 0) {
        return hobby1+" and "+hobby2;
    } else if(option === 1) {
        return hobby1+", "+hobby2+", and "+hobby3
    } else if(option === 2) {
        return hobby1+", "+hobby2+", "+hobby3+", and "+hobby4
    }
}
//generates and returns a sentence about hobbies
var sentence2 = function() {
    const option = randomNum(0, 3);
    if(option === 0) {
        return "My hobbies are "+generateHobbies()+". ";
    } else if(option === 1) {
        return "I like to " +" ".concat(generateHobbies().concat(" ")).replace('ing', '').replace('ing', '')
            .replace('ing', '').replace('ing', '').replace('ing', '').replace(' s,', ' sing,')
            .replace('and s ', 'and sing ').replace(' s and', ' sing and')+ " during my spare time. ";
    } else if(option === 2) {
        return "I really enjoy "+generateHobbies()+". ";
    } else if(option === 3) {
        return "Some of my interests are "+generateHobbies()+". ";
    }
}
//generates and returns a sentence about what they are a fan of, a quote, or volunteer experience
var sentence3 = function() {
    const option = randomNum(0, 2);
    if(option === 0) {
        const option2 = randomNum(0, 2);
        if(option2 === 0) {
            return "I'm a big fan of "+select(fanbases)+"! ";               
        } else if(option2 === 1) {
            return "I'm forever a "+select(fanbases)+" fan! ";
        } else if(option2 === 2) {
            return "I will never get tired of saying how much I love "+select(fanbases)+"! ";
        }
    } else if(option === 1) {
        const option2 = randomNum(0, 2);
        if(option2 === 0) {
            return "A quote that inspired me is "+select(quotes);
        } else if(option2 === 1) {
            return "A quote I live by is "+select(quotes);
        } else if(option2 === 2) {
            return "My favourite quote is "+select(quotes);
        }            
    } else if(option === 2) {
        const option2 = randomNum(0, 2);
        const volunteer = select(volunteerWork);
        if(option2 === 0) {
            return "I love helping out at the "+volunteer+". ";
        } else if(option2 === 1) {
            return grammarCheck("I am also a volunteer at a ", volunteer)+volunteer+". ";
        } else if(option2 === 2) {
            return grammarCheck("I give back to the community by volunteering at a ", volunteer)+volunteer+". ";
        }
    }
}
//generates and returns a three-sentence description
var generateDescription = function() {
    return sentence1(firstName, lastName)+sentence2()+sentence3();
}
//declare variable for description
const description = generateDescription();
//loads web page
var loadPage = function() {
    document.getElementById("name").innerHTML = firstName+" "+lastName;
    document.getElementById("profilePic").src = profilePic;
    //document.getElementById("profilePic").src = "https://www.thispersondoesnotexist.com/image";
    document.getElementById("description").innerHTML = description;
    document.getElementById("dateOfBirth").innerHTML = dateOfBirth;
    document.getElementById("age").innerHTML = age+" years old";
    document.getElementById("phoneNum").innerHTML = phoneNum;
    document.getElementById("phoneNumLink").href = phoneNumLink;
    document.getElementById("email").innerHTML = email;
    document.getElementById("emailLink").href = emailLink;  
    document.getElementById("address").innerHTML = address;  
}
//calls function to load web page
loadPage();
