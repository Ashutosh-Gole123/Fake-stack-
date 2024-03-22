export default class Model {
  constructor() {
    this.data = {
      questions: [
                  {
                    qid: 'q1',
                    title: 'Programmatically navigate using React router',
                    text: 'the alert shows the proper index for the li clicked, and when I alert the variable within the last function I\'m calling, moveToNextImage(stepClicked), the same value shows but the animation isn\'t happening. This works many other ways, but I\'m trying to pass the index value of the list item clicked to use for the math to calculate.',
                    tagIds: ['t1', 't2'],
                    askedBy : 'JoJi John',
                    askDate: new Date('December 17, 2020 03:24:00'),
                    ansIds: ['a1', 'a2'],
                    views: 10,
                  },
                  {
                    qid: 'q2',
                    title: 'android studio save string shared preference, start activity and load the saved string',
                    text: 'I am using bottom navigation view but am using custom navigation, so my fragments are not recreated every time i switch to a different view. I just hide/show my fragments depending on the icon selected. The problem i am facing is that whenever a config change happens (dark/light theme), my app crashes. I have 2 fragments in this activity and the below code is what i am using to refrain them from being recreated.',
                    tagIds: ['t3', 't4', 't2'],
                    askedBy : 'saltyPeter',
                    askDate: new Date('January 01, 2022 21:06:12'),
                    ansIds: ['a3', 'a4', 'a5'],
                    views: 121,
                  }
                ],
      tags: [
        {
          tid: 't1',
          name: 'react',
        },
        {
          tid: 't2',
          name: 'javascript',
        },
        {
          tid: 't3',
          name: 'android-studio',
        },
        {
          tid: 't4',
          name: 'shared-preferences',
        }
      ],

      answers: [
        {
          aid: 'a1',
          text: 'React Router is mostly a wrapper around the history library. history handles interaction with the browser\'s window.history for you with its browser and hash histories. It also provides a memory history which is useful for environments that don\'t have a global history. This is particularly useful in mobile app development (react-native) and unit testing with Node.',
          ansBy: 'hamkalo',
          ansDate: new Date('March 02, 2022 15:30:00'),
        },
        {
          aid: 'a2',
          text: 'On my end, I like to have a single history object that I can carry even outside components. I like to have a single history.js file that I import on demand, and just manipulate it. You just have to change BrowserRouter to Router, and specify the history prop. This doesn\'t change anything for you, except that you have your own history object that you can manipulate as you want. You need to install history, the library used by react-router.',
          ansBy: 'azad',
          ansDate: new Date('January 31, 2022 15:30:00'),
        },
        {
          aid: 'a3',
          text: 'Consider using apply() instead; commit writes its data to persistent storage immediately, whereas apply will handle it in the background.',
          ansBy: 'abaya',
          ansDate: new Date('April 21, 2022 15:25:22'),
        },
        {
          aid: 'a4',
          text: 'YourPreference yourPrefrence = YourPreference.getInstance(context); yourPreference.saveData(YOUR_KEY,YOUR_VALUE);',
          ansBy: 'alia',
          ansDate: new Date('December 02, 2022 02:20:59'),
        },
        {
          aid: 'a5',
          text: 'I just found all the above examples just too confusing, so I wrote my own. ',
          ansBy: 'sana',
          ansDate: new Date('December 31, 2022 20:20:59'),
        }
      ]
    };
  }
  insertQuestion(title, text, tagTitles, askedBy) {
    console.log("function call")
    const tagIds = tagTitles.map(tagTitle => this.insertTagTitle(tagTitle));
    const newQuestion = {
      qid: "q" + (this.data.questions.length + 1),
      title,
      text,
      tagIds,
      askedBy,
      askDate: new Date(),
      ansIds: [],
      views: 0
    };
    this.data.questions.push(newQuestion);
    return newQuestion;
  }

  // Method to insert a new tag title
  insertTagTitle(tagTitle) {
    const existingTag = this.data.tags.find(tag => tag.name === tagTitle);
    if (existingTag) {
      return existingTag.tid;
    } else {
      const newTagId = "t" + (this.data.tags.length + 1);
      const newTag = {
        tid: newTagId,
        name: tagTitle
      };
      this.data.tags.push(newTag);
      return newTagId;
    }
  }
  // add methods to query, insert, and update the model here. E.g.,
  getAllQstns() {
    return this.data.questions;
  }

  insertQstn(title, text, tags, askedBy) {
    console.log("function call")

    let newQstn = {
      qid: "q" + this.data.questions.length + 1,
      title: title,
      text: text,
      tagIds: this.tagNamesToIds(tags),
      askedBy: askedBy,
      askDate: new Date(),
      ansIds: [],
      views: 0
    }
    this.data.questions.push(newQstn)
    return newQstn;
  }

  viewQstn(qstn) {
    qstn.views++;
  }

  getAllTags() {
    return this.data.tags;
  }

  insertTag(tagName) {
    let newTag = {
      tid: "t" + this.data.tags.length + 1,
      name: tagName
    };
    this.data.tags.push(newTag);
    return newTag.tid;
  }

  // converts a tag name to an id. creates a new tag if it doesn't already exist.
  tagNameToId(tagName) {
    for (let i = 0; i < this.data.tags.length; i++) {
      if (this.data.tags[i].name == tagName) {
        return this.data.tags[i].tid;
      }
    }
    return this.insertTag(tagName);
  }

  tagNamesToIds(tagNames) {
    let ret = [...tagNames];
    for (let i = 0; i < ret.length; i++) {
      ret[i] = this.tagNameToId(ret[i]);
    }
    return ret;
  }

  tagIdToName(tagId) {
    for (let i = 0; i < this.data.tags.length; i++) {
      if (this.data.tags[i].tid == tagId) {
        return this.data.tags[i].name;
      }
    }
  }

  tagIdsToNames(tagIds) {
    let ret = [...tagIds];
    for (let i = 0; i < ret.length; i++) {
      ret[i] = this.tagIdToName(ret[i]);
    }
    return ret;
  }

  getQstnAnswers(qstn) {
    return qstn.ansIds.map(aid => this.ansIdToAnswer(aid));
  }

  ansIdToAnswer(aid) {
    for (let i = 0; i < this.data.answers.length; i++) {
      if (this.data.answers[i].aid == aid)
        return this.data.answers[i];
    }
  }

  sortQstnsByDate() {
    this.data.questions.sort((a, b) => b.askDate - a.askDate);
  }

  sortQstnAnswersByDate(qstn) {
    qstn.ansIds.sort((x, y) => this.ansIdToAnswer(y).ansDate - this.ansIdToAnswer(x).ansDate)
  }

  compareQuestionActivity(a, b) {
    this.sortQstnAnswersByDate(a);
    this.sortQstnAnswersByDate(b);
    if (a.ansIds.length == 0)
      return 1;
    if (b.ansIds.length == 0)
      return -1;
    return this.ansIdToAnswer(b.ansIds[0]).ansDate - this.ansIdToAnswer(a.ansIds[0]).ansDate;
  }

  sortQstnsByActive() {
    this.data.questions.sort((a, b) => this.compareQuestionActivity(a, b))
  }

  insertAns(ansBy, text, qstn) {
    const aid = "a" + this.data.answers.length + 1
    let newAns = {
      aid: aid,
      text: text,
      ansBy: ansBy,
      ansDate: new Date()
    }
    qstn.ansIds.push(aid);
    this.data.answers.push(newAns);
    return newAns;
  }

  
  
}
