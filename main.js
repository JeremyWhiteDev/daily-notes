/*
    Part 1: Define a variable named `notes` and assign a value of an empty array
*/


/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

//creating an array of objects based on criteria above:
const notes = [
    {
        id: 1,
        topics: ["in Progress", "Come Back to it", "Why not include this"],
        text: "Sample Text: This is where the first sentence of id #1 would go",
        author: "Jeremy",
        date: "7-7-22",
    },
    {
        id: 2,
        topics: ["Understood", "Done", "in Progress", "More topics"],
        text: "Sample Text: I have a good understanding of this topic. I feel like I can move on from it",
        author: "Rachel",
        date: "7-17-22",
    },
    {
        id: 3,
        topics: ["Confused", "Come Back to it", "Average", "Calculations"],
        text: "Coming up with fake content is hard!!",
        author: "Jon",
        date: "7-25-22",
    }
    
]
//Part 2 add more Notes:
notes.push({
    id: 4,
    topics: ["May the fourth be with you", "star wars"],
    text: "Couldn't let a star wars reference go unsaid",
    author: "Leah",
    date: "7-31-22",
})
notes.push({
    id: 5,
    topics: ["challenge"],
    text: "This was primarily lab time. I spent some of today working on the additional beginning exercises for JS",
    author: "Bob",
    date: "8-1-22",
})
notes.push({
    id: 6,
    topics: ["ERD", "data structures", "data Relationships"],
    text: " There was also a mention of the fact that most of the time data would be captured using an API. Curious to see how these concepts will be implemented.",
    author: "Jan Levinson Gould",
    date: "8-2-22",
})

//part 3, list all notes
// console.log(notes);


//Part 4: display all text of each entry
// for (const entry of notes) {
//     console.log(entry.text);
// }



//Part 5: average topics per note. possility #1: so I'm going to iterate through each note, count the # of topicsand then divide the total by the number of objects in teh array. 


// attempt #1

// let totalCount = 0;

// for (const entry of notes) {
//     totalCount += entry.topics.length
// }

// let averageCount = totalCount / notes.length;


// console.log(Math.ceil(averageCount));


// attempt #2 refactored with function and everything contained inside that function.


const averageTopics = (obj) => {
    let topicCount = 0;
    for (const entry of notes) {
        topicCount += entry.topics.length
    }
    return Math.ceil(topicCount / obj.length);

}

// console.log(averageTopics(notes));


//Part 6: list of notes by topic

//iterate through the array. filter (via if) certain topics. console log each one seperately? probably easiest and clearest way to accomplish is to create empty array, add each object to that array using push combined with if. else dont do anyting.

//also should use includes method for the if statement.

const filterNotes = [];

filterCriteria = "Come Back to it";

for (const entry of notes) {
    if (entry.topics.includes(filterCriteria)) {
        filterNotes.push(entry);

    }

}

// console.log(filterNotes);

// Part 7: Note articles

//iterate through notes array, logging the text of each note and appending  the words <article></article> to each iteration.

// for (const entry of notes) {
//    console.log(`<article>${entry.text}</article>`)
//     }
    
    
    //Part 8: Note topic sections.
    
    //create html structure for articles that include seperate sections for each topic at the end of the article before the article closing tag. example:
    
    /* <article>
    Always work on a branch and submit a PR, even if I'm working on my own project.
    <section>strategy</section>
    <section>github</section>
    </article> */

    //I want to add sections at the end, but i dont want thhose sections to add up. with for of, it's all about structure. just keep adding individual entries to a single string.

    
    
   let allHTML = "";
 
   for (const entry of notes) {
    allHTML+= `
    <article>
    ${entry.text}`;
    for (let i = 0; i < entry.topics.length; i++) {
        allHTML += `
        <section>${entry.topics[i]}</section>`;
    }
    allHTML += `
    </article>`
   }
    
console.log(allHTML);