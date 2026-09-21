/* Articles page: everyone can read; only the owner (after signing in) can write, edit, delete and publish.
   The owner writes in a Medium-style editor, uploads pictures directly, and gets help from Byte (owner-only). */
(function () {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const root = document.documentElement;
  const BA = window.BuddyArt || { STYLES: ['robot'], art: () => '', DEFAULT_NAME: { robot: 'Byte' } };
  const COLORS = ['#58a6ff', '#3fb950', '#b47cff', '#ff6fb1', '#ff9f43', '#ff5a5f'];
  const SESSION_KEY = 'doryco_owner_session';
  const PAGE = 12;

  /* The owner check keeps only a salted hash: the password itself is not stored anywhere in this website. */
  const OWNER = {"salt":"c33fcfb40c40b928cce7bb84d179fd9c","iter":210000,"hash":"8f978bfc5174b500b39602343b055eeb728ee010817d17b10dbc00ee11ff34aa"};

  /* ---------- text in both languages (anything missing in Khmer falls back to English) ---------- */
  const T = {
    en: {
      home: 'Home', articles: 'Articles', back: 'Back to portfolio',
      title: 'Articles', sub: 'Short articles about coding, learning and building things. Pick one to read.',
      search: 'Search articles...', all: 'All', empty: 'No articles yet', emptyHint: 'Please check back soon.', noMatch: 'No articles match your search.',
      min: 'min read', list: 'All articles', share: 'Copy link', copied: 'Link copied!', draft: 'Draft', notFound: 'Article not found', notFoundHint: 'It may have been moved or removed.',
      count: n => n + (n === 1 ? ' article' : ' articles'), owner: 'Owner login', logoutDone: 'Signed out', more: 'Load more', prev: 'Previous', next: 'Next',
      sortNew: 'Newest first', sortOld: 'Oldest first', sortAz: 'A to Z',
      loginTitle: 'Owner login', loginHint: 'Only the website owner can write and edit articles.', user: 'Username', pass: 'Password', signIn: 'Sign in', cancel: 'Cancel',
      loginFail: 'Wrong username or password.', loginLocked: s => 'Too many attempts. Please wait ' + s + ' seconds.', loginNoCrypto: 'This browser cannot verify the login. Please use a modern browser on https or localhost.',
      ownerMode: 'Owner mode', newArticle: 'Write a story', export: 'Publish (download .zip)', discard: 'Discard local changes', logout: 'Log out',
      unpub: 'You have unpublished changes', synced: 'Everything here is published',
      exportHelp: 'Downloaded "articles-update.zip". Unzip it and copy everything inside (articles-data.js and the pictures) into your website folder, replacing the old articles-data.js. Then upload the folder. Visitors will see your changes after that.',
      edit: 'Edit', del: 'Delete', delConfirm: 'Delete this article? This cannot be undone.', discardConfirm: 'Throw away all local changes (including pictures you added) and go back to the published articles?',
      deleted: 'Deleted', discarded: 'Local changes discarded', by: 'By Doryco Chorng', noStorage: 'This browser cannot save pictures locally, so they will be lost when you leave.',
      /* editor */
      edClose: 'Close', edDone: 'Done', edPreview: 'Preview', edWrite: 'Write', edDetails: 'Details', edByte: 'Byte', saving: 'Saving...', saved: 'Saved', ready: 'Ready to publish', draftMode: 'Draft',
      phTitle: 'Title', phSub: 'Subtitle: tell readers what this is about', phBody: 'Tell your story...', phCaption: 'Type a caption for this picture (optional)',
      addImage: 'Picture', addH2: 'Heading', addH3: 'Subheading', addQuote: 'Quote', addList: 'Bulleted list', addNum: 'Numbered list', addCode: 'Code block',
      dropHere: 'Drop pictures to upload', uploading: 'Uploading...', badImage: 'That file is not a picture I can use.', imgAdded: n => n + (n === 1 ? ' picture added' : ' pictures added'),
      asCover: 'Use as cover', isCover: 'Cover', removeImg: 'Remove', linkPh: 'Paste a link and press Enter',
      dTags: 'Tags (comma separated)', dDate: 'Date', dAvatar: 'Cover avatar', dColor: 'Cover colour', dPics: 'Pictures in this story', dNoPics: 'No pictures yet. Drag some in, paste them, or press + on an empty line.', dDelete: 'Delete story',
      tabEn: 'English', tabKm: 'ខ្មែរ', preEmpty: 'Nothing to preview yet.', needTitle: 'Give your story a title first.',
      /* Byte, the writing helper */
      byName: 'Byte', bySub: 'Your writing helper. Only you can see me.', byHello: 'Hi! I can help you organize your story. Try a button below, or ask me something.',
      byOutline: 'Outline for me', byOrg: 'Organize my text', byCheck: 'Check my story', bySuggest: 'Suggest title & tags', byAiOrg: 'Organize with AI', byAiImprove: 'Improve wording', byAiTr: 'Translate',
      byStruct: 'Story structure', byWords: 'words', byMins: 'min', bySections: 'sections', byPics: 'pictures',
      ckIntro: 'Starts with a short introduction', ckSections: 'Has at least 2 sections', ckEnd: 'Ends with a conclusion', ckShort: 'Paragraphs are short', ckSub: 'Has a subtitle', ckTags: 'Has tags', ckPic: 'Has a picture',
      pickStruct: 'Pick a structure to start with:', tplEssay: 'Essay', tplHow: 'How-to guide', tplProject: 'Project write-up', tplReflect: 'Reflection', tplRef: 'Reference notes',
      byInserted: 'Done! I added the structure. Fill in each section.', byNothing: 'There is nothing to organize yet. Write a little first, or ask me for an outline.',
      byOrgDone: (a, b, c) => 'Organized! I split ' + a + ' long paragraph(s), made ' + b + ' heading(s) and tidied ' + c + ' list/picture group(s).', byOrgSame: 'Your text is already well organized.',
      undo: 'Undo', apply: 'Apply', byChecked: 'Here is how your story looks:', byTitleIs: 'Title', bySummaryIs: 'Subtitle', byTagsAre: 'Tags', bySuggested: 'I have some ideas:',
      byAsk: 'Ask Byte for help...', byNoAi: 'That needs AI mode. Connect an AI key below (it stays on this device only).', byThinking: 'Thinking...', byAiFail: 'The AI could not answer: ',
      aiOn: 'AI mode is on', aiOff: 'AI mode is off (Byte still helps offline)', aiConnect: 'Connect AI', aiForget: 'Forget key', aiSave: 'Save', aiKeyPh: 'Paste your API key',
      aiNote: 'Your key is saved only in this browser. When you use AI, the text you send goes to the AI service.', aiSaved: 'AI connected.', aiGone: 'Key removed.',
      byLocalTips: [
        [['intro', 'start', 'begin', 'hook'], 'Start with 2 or 3 sentences that say what the story is about and why someone should read it.'],
        [['conclusion', 'end', 'finish', 'ending'], 'End with a short conclusion: what you learned, or what the reader can do next.'],
        [['structure', 'organize', 'organise', 'outline', 'sections'], 'A simple structure works best: introduction, 2 to 4 sections with headings, then a conclusion. Press "Outline for me" and I will add one.'],
        [['picture', 'image', 'photo', 'upload'], 'Drag pictures into the page, paste them, or press + on an empty line. Pictures placed one after another become a neat gallery.'],
        [['title', 'headline'], 'Good titles are short and clear. Press "Suggest title & tags" and I will propose one.'],
        [['publish', 'export', 'upload site', 'online'], 'Turn on "Ready to publish", then press "Publish (download .zip)" on the owner bar. Unzip it into your website folder and upload.'],
        [['long', 'paragraph', 'read'], 'Keep paragraphs to 3 or 4 sentences. Press "Organize my text" and I will split the long ones.']
      ], byFallback: 'I can help with structure, introductions, conclusions, pictures and publishing. Try one of the buttons above.'
    },
    km: {
      home: 'ទំព័រដើម', articles: 'អត្ថបទ', back: 'ត្រឡប់ទៅ portfolio',
      title: 'អត្ថបទ', sub: 'អត្ថបទខ្លីៗអំពីការសរសេរកូដ ការរៀន និងការបង្កើតអ្វីៗ។ ជ្រើសរើសមួយដើម្បីអាន។',
      search: 'ស្វែងរកអត្ថបទ...', all: 'ទាំងអស់', empty: 'មិនទាន់មានអត្ថបទទេ', emptyHint: 'សូមត្រឡប់មកវិញឆាប់ៗ។', noMatch: 'គ្មានអត្ថបទត្រូវនឹងការស្វែងរករបស់អ្នកទេ។',
      min: 'នាទីអាន', list: 'អត្ថបទទាំងអស់', share: 'ចម្លងតំណ', copied: 'បានចម្លងតំណ!', draft: 'សេចក្តីព្រាង', notFound: 'រកមិនឃើញអត្ថបទ', notFoundHint: 'វាប្រហែលជាត្រូវបានផ្លាស់ទី ឬលុបចេញ។',
      count: n => n + ' អត្ថបទ', owner: 'ចូលជាម្ចាស់គេហទំព័រ', logoutDone: 'បានចាកចេញ', more: 'ផ្ទុកបន្ថែម', prev: 'មុន', next: 'បន្ទាប់',
      sortNew: 'ថ្មីបំផុតមុន', sortOld: 'ចាស់បំផុតមុន', sortAz: 'តាមអក្ខរក្រម',
      loginTitle: 'ចូលជាម្ចាស់គេហទំព័រ', loginHint: 'មានតែម្ចាស់គេហទំព័រប៉ុណ្ណោះដែលអាចសរសេរ និងកែអត្ថបទបាន។', user: 'ឈ្មោះអ្នកប្រើ', pass: 'លេខសម្ងាត់', signIn: 'ចូល', cancel: 'បោះបង់',
      loginFail: 'ឈ្មោះអ្នកប្រើ ឬលេខសម្ងាត់មិនត្រឹមត្រូវ។', loginLocked: s => 'ព្យាយាមច្រើនពេក។ សូមរង់ចាំ ' + s + ' វិនាទី។', loginNoCrypto: 'កម្មវិធីរុករកនេះមិនអាចផ្ទៀងផ្ទាត់ការចូលបានទេ។ សូមប្រើកម្មវិធីរុករកទំនើបលើ https ឬ localhost។',
      ownerMode: 'ម៉ូតម្ចាស់', newArticle: 'សរសេររឿង', export: 'ផ្សព្វផ្សាយ (ទាញយក .zip)', discard: 'បោះបង់ការផ្លាស់ប្តូរក្នុងម៉ាស៊ីន', logout: 'ចាកចេញ',
      unpub: 'អ្នកមានការផ្លាស់ប្តូរដែលមិនទាន់ផ្សព្វផ្សាយ', synced: 'អ្វីៗទាំងអស់នៅទីនេះបានផ្សព្វផ្សាយហើយ',
      exportHelp: 'បានទាញយក "articles-update.zip"។ ពន្លាវា រួចចម្លងអ្វីៗនៅខាងក្នុង (articles-data.js និងរូបភាព) ទៅក្នុងថតគេហទំព័រ ដោយជំនួស articles-data.js ចាស់។ បន្ទាប់មកផ្ទុកឡើង។ អ្នកទស្សនានឹងឃើញការផ្លាស់ប្តូរបន្ទាប់ពីនោះ។',
      edit: 'កែ', del: 'លុប', delConfirm: 'លុបអត្ថបទនេះ? មិនអាចត្រឡប់វិញបានទេ។', deleted: 'បានលុប', discarded: 'បានបោះបង់ការផ្លាស់ប្តូរ', by: 'ដោយ ជង់ ឌូរីកូ',
      edClose: 'បិទ', edDone: 'រួចរាល់', edPreview: 'មើលជាមុន', edWrite: 'សរសេរ', edDetails: 'ព័ត៌មានលម្អិត', saving: 'កំពុងរក្សាទុក...', saved: 'បានរក្សាទុក', ready: 'ត្រៀមផ្សព្វផ្សាយ', draftMode: 'សេចក្តីព្រាង',
      phTitle: 'ចំណងជើង', phSub: 'ចំណងជើងរង៖ ប្រាប់អ្នកអានថាវាអំពីអ្វី', phBody: 'ប្រាប់រឿងរបស់អ្នក...',
      tabEn: 'English', tabKm: 'ខ្មែរ', byName: 'Byte',
      discardConfirm: 'បោះបង់ការផ្លាស់ប្តូរទាំងអស់ក្នុងម៉ាស៊ីន (រួមទាំងរូបភាពដែលអ្នកបានបន្ថែម) ហើយត្រឡប់ទៅអត្ថបទដែលបានផ្សព្វផ្សាយ?', noStorage: 'កម្មវិធីរុករកនេះមិនអាចរក្សាទុករូបភាពក្នុងម៉ាស៊ីនបានទេ ដូច្នេះវានឹងបាត់នៅពេលអ្នកចាកចេញ។',
      edByte: 'Byte', edWrite: 'សរសេរ', phCaption: 'វាយចំណងរូបភាព (មិនចាំបាច់)',
      addImage: 'រូបភាព', addH2: 'ចំណងជើង', addH3: 'ចំណងជើងរង', addQuote: 'សម្រង់', addList: 'បញ្ជីមានចំណុច', addNum: 'បញ្ជីមានលេខ', addCode: 'ប្លុកកូដ',
      dropHere: 'ទម្លាក់រូបភាពដើម្បីផ្ទុកឡើង', uploading: 'កំពុងផ្ទុកឡើង...', badImage: 'ឯកសារនោះមិនមែនជារូបភាពដែលខ្ញុំអាចប្រើបានទេ។', imgAdded: n => 'បានបន្ថែមរូបភាព ' + n,
      asCover: 'ប្រើជារូបគម្រប', isCover: 'គម្រប', removeImg: 'ដកចេញ', linkPh: 'បិទភ្ជាប់តំណ រួចចុច Enter',
      dTags: 'ស្លាក (ផ្ដាច់ដោយសញ្ញាក្បៀស)', dDate: 'កាលបរិច្ឆេទ', dAvatar: 'តួអង្គគម្រប', dColor: 'ពណ៌គម្រប', dPics: 'រូបភាពក្នុងរឿងនេះ', dNoPics: 'មិនទាន់មានរូបភាពទេ។ អូសចូល បិទភ្ជាប់ ឬចុច + លើបន្ទាត់ទទេ។', dDelete: 'លុបរឿង',
      preEmpty: 'មិនទាន់មានអ្វីត្រូវមើលជាមុនទេ។', needTitle: 'សូមដាក់ចំណងជើងឱ្យរឿងរបស់អ្នកសិន។',
      bySub: 'ជំនួយការសរសេររបស់អ្នក។ មានតែអ្នកទេដែលឃើញខ្ញុំ។', byHello: 'សួស្តី! ខ្ញុំអាចជួយរៀបចំរឿងរបស់អ្នក។ សាកល្បងប៊ូតុងខាងក្រោម ឬសួរខ្ញុំអ្វីមួយ។',
      byOutline: 'ធ្វើគ្រោងឱ្យខ្ញុំ', byOrg: 'រៀបចំអត្ថបទរបស់ខ្ញុំ', byCheck: 'ពិនិត្យរឿងរបស់ខ្ញុំ', bySuggest: 'ណែនាំចំណងជើង និងស្លាក', byAiOrg: 'រៀបចំដោយ AI', byAiImprove: 'កែសម្រួលពាក្យ', byAiTr: 'បកប្រែ',
      byWords: 'ពាក្យ', byMins: 'នាទី', bySections: 'ផ្នែក', byPics: 'រូបភាព',
      ckIntro: 'ចាប់ផ្តើមដោយសេចក្តីផ្តើមខ្លី', ckSections: 'មានយ៉ាងហោចណាស់ ២ ផ្នែក', ckEnd: 'ចប់ដោយសេចក្តីសន្និដ្ឋាន', ckShort: 'កថាខណ្ឌខ្លីៗ', ckSub: 'មានចំណងជើងរង', ckTags: 'មានស្លាក', ckPic: 'មានរូបភាព',
      pickStruct: 'ជ្រើសរើសរចនាសម្ព័ន្ធដើម្បីចាប់ផ្តើម៖', tplEssay: 'អត្ថបទ', tplHow: 'មគ្គុទ្ទេសក៍ជំហានៗ', tplProject: 'កំណត់ត្រាគម្រោង', tplReflect: 'ការឆ្លុះបញ្ចាំង', tplRef: 'កំណត់ចំណាំយោង',
      byInserted: 'រួចរាល់! ខ្ញុំបានបន្ថែមរចនាសម្ព័ន្ធ។ សូមបំពេញផ្នែកនីមួយៗ។', byNothing: 'មិនទាន់មានអ្វីត្រូវរៀបចំទេ។ សរសេរបន្តិចសិន ឬសុំគ្រោងពីខ្ញុំ។',
      byOrgDone: (x, y, z) => 'រៀបចំរួចហើយ! ខ្ញុំបានបំបែកកថាខណ្ឌវែង ' + x + ' បង្កើតចំណងជើង ' + y + ' និងរៀបចំក្រុមបញ្ជី/រូបភាព ' + z + '។', byOrgSame: 'អត្ថបទរបស់អ្នកត្រូវបានរៀបចំល្អរួចហើយ។',
      undo: 'មិនធ្វើវិញ', apply: 'ប្រើ', byChecked: 'នេះជារបៀបដែលរឿងរបស់អ្នកមើលទៅ៖', byTitleIs: 'ចំណងជើង', bySummaryIs: 'ចំណងជើងរង', byTagsAre: 'ស្លាក', bySuggested: 'ខ្ញុំមានគំនិតខ្លះ៖',
      byAsk: 'សួរ Byte សុំជំនួយ...', byNoAi: 'សកម្មភាពនេះត្រូវការម៉ូត AI។ សូមភ្ជាប់សោ AI ខាងក្រោម (វានៅតែក្នុងឧបករណ៍នេះប៉ុណ្ណោះ)។', byThinking: 'កំពុងគិត...', byAiFail: 'AI មិនអាចឆ្លើយបានទេ៖ ',
      aiOn: 'ម៉ូត AI បើក', aiOff: 'ម៉ូត AI បិទ (Byte នៅតែជួយបានដោយគ្មានអ៊ីនធឺណិត)', aiForget: 'ភ្លេចសោ', aiSave: 'រក្សាទុក', aiKeyPh: 'បិទភ្ជាប់សោ API របស់អ្នក',
      aiNote: 'សោរបស់អ្នកត្រូវបានរក្សាទុកក្នុងកម្មវិធីរុករកនេះប៉ុណ្ណោះ។ នៅពេលប្រើ AI អត្ថបទដែលអ្នកផ្ញើនឹងទៅកាន់សេវា AI។', aiSaved: 'បានភ្ជាប់ AI។', aiGone: 'បានដកសោចេញ។',
      byLocalTips: [
        [['intro', 'start', 'begin', 'hook', 'ផ្តើម'], 'ចាប់ផ្តើមដោយ ២ ឬ ៣ ប្រយោគ ដែលប្រាប់ថារឿងនេះអំពីអ្វី និងហេតុអ្វីគួរអាន។'],
        [['conclusion', 'end', 'finish', 'ending', 'សន្និដ្ឋាន'], 'បញ្ចប់ដោយសេចក្តីសន្និដ្ឋានខ្លី៖ អ្វីដែលអ្នកបានរៀន ឬអ្វីដែលអ្នកអានអាចធ្វើបន្ទាប់។'],
        [['structure', 'organize', 'organise', 'outline', 'sections', 'រចនាសម្ព័ន្ធ', 'គ្រោង'], 'រចនាសម្ព័ន្ធសាមញ្ញល្អបំផុត៖ សេចក្តីផ្តើម ២ ដល់ ៤ ផ្នែកមានចំណងជើង រួចសេចក្តីសន្និដ្ឋាន។ ចុច "ធ្វើគ្រោងឱ្យខ្ញុំ" ខ្ញុំនឹងបន្ថែមឱ្យ។'],
        [['picture', 'image', 'photo', 'upload', 'រូប'], 'អូសរូបភាពចូលទំព័រ បិទភ្ជាប់ ឬចុច + លើបន្ទាត់ទទេ។ រូបភាពដែលដាក់បន្តបន្ទាប់គ្នានឹងក្លាយជាវិចិត្រសាលស្អាត។'],
        [['title', 'headline', 'ចំណងជើង'], 'ចំណងជើងល្អគឺខ្លី និងច្បាស់។ ចុច "ណែនាំចំណងជើង និងស្លាក" ខ្ញុំនឹងស្នើមួយ។'],
        [['publish', 'export', 'online', 'ផ្សព្វផ្សាយ'], 'ប្តូរទៅ "ត្រៀមផ្សព្វផ្សាយ" រួចចុច "ផ្សព្វផ្សាយ (ទាញយក .zip)" នៅរបារម្ចាស់។ ពន្លាចូលថតគេហទំព័រ រួចផ្ទុកឡើង។'],
        [['long', 'paragraph', 'read', 'វែង'], 'រក្សាកថាខណ្ឌឱ្យមាន ៣ ឬ ៤ ប្រយោគ។ ចុច "រៀបចំអត្ថបទរបស់ខ្ញុំ" ខ្ញុំនឹងបំបែកកថាខណ្ឌវែងៗ។']
      ], byFallback: 'ខ្ញុំអាចជួយអំពីរចនាសម្ព័ន្ធ សេចក្តីផ្តើម សេចក្តីសន្និដ្ឋាន រូបភាព និងការផ្សព្វផ្សាយ។ សាកល្បងប៊ូតុងមួយខាងលើ។'
    }
  };
  let LANG = root.getAttribute('lang') === 'km' ? 'km' : 'en';
  const t = () => (LANG === 'km' ? Object.assign({}, T.en, T.km) : T.en);

  /* ---------- small helpers ---------- */
  const clone = o => JSON.parse(JSON.stringify(o));
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const uid = () => Date.now().toString(36).slice(-5) + Math.random().toString(36).slice(2, 6);
  const isKh = s => /[ក-៿]/.test(s);
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  function toast(msg) {
    const el = $('#toast'); el.textContent = msg; el.hidden = false; el.classList.add('show');
    clearTimeout(toast._t); toast._t = setTimeout(() => { el.classList.remove('show'); setTimeout(() => { el.hidden = true; }, 250); }, 2600);
  }
  const store = {
    get(k, s) { try { return (s ? sessionStorage : localStorage).getItem(k); } catch (e) { return null; } },
    set(k, v, s) { try { (s ? sessionStorage : localStorage).setItem(k, v); } catch (e) { /* storage may be blocked */ } },
    del(k, s) { try { (s ? sessionStorage : localStorage).removeItem(k); } catch (e) { /* ignore */ } }
  };

  /* ---------- big storage for the owner's work and pictures (IndexedDB, with a memory fallback) ---------- */
  const DB = {
    p: null, ok: true, mem: { kv: new Map(), img: new Map() },
    open() {
      if (this.p) return this.p;
      this.p = new Promise((res, rej) => {
        try {
          const r = indexedDB.open('dorycoArticles', 1);
          r.onupgradeneeded = () => { const d = r.result; d.createObjectStore('kv'); d.createObjectStore('img'); };
          r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); r.onblocked = () => rej(new Error('blocked'));
        } catch (e) { rej(e); }
      });
      return this.p;
    },
    async run(store, mode, fn) {
      const d = await this.open();
      return new Promise((res, rej) => { const tx = d.transaction(store, mode); const r = fn(tx.objectStore(store)); tx.oncomplete = () => res(r && r.result); tx.onerror = () => rej(tx.error); tx.onabort = () => rej(tx.error); });
    },
    async get(s, k) { try { return await this.run(s, 'readonly', o => o.get(k)); } catch (e) { this.ok = false; return this.mem[s].get(k); } },
    async put(s, k, v) { try { await this.run(s, 'readwrite', o => o.put(v, k)); } catch (e) { this.ok = false; this.mem[s].set(k, v); } },
    async del(s, k) { try { await this.run(s, 'readwrite', o => o.delete(k)); } catch (e) { this.ok = false; this.mem[s].delete(k); } },
    async clear(s) { try { await this.run(s, 'readwrite', o => o.clear()); } catch (e) { this.ok = false; this.mem[s].clear(); } }
  };

  /* ---------- data ---------- */
  const normalize = a => ({
    id: String(a.id || ('a' + uid())),
    title: String(a.title || ''), titleKm: String(a.titleKm || ''),
    summary: String(a.summary || ''), summaryKm: String(a.summaryKm || ''),
    body: String(a.body || ''), bodyKm: String(a.bodyKm || ''),
    tags: Array.isArray(a.tags) ? a.tags.map(x => String(x).trim()).filter(Boolean).slice(0, 8) : [],
    date: /^\d{4}-\d{2}-\d{2}$/.test(a.date) ? a.date : new Date().toISOString().slice(0, 10),
    avatar: BA.STYLES.includes(a.avatar) ? a.avatar : 'robot',
    color: COLORS.includes(a.color) ? a.color : COLORS[0],
    images: Array.isArray(a.images) ? a.images.filter(i => i && i.id && i.file).map(i => ({ id: String(i.id), file: String(i.file), alt: String(i.alt || ''), w: +i.w || 0, h: +i.h || 0 })) : [],
    cover: String(a.cover || ''),
    draft: !!a.draft
  });
  const sortList = (list, mode) => list.slice().sort((a, b) => {
    if (mode === 'az') return a.title.localeCompare(b.title);
    const d = String(b.date).localeCompare(String(a.date));
    return mode === 'old' ? -d || a.title.localeCompare(b.title) : d || a.title.localeCompare(b.title);
  });
  const published = (Array.isArray(window.ARTICLES_DATA) ? window.ARTICLES_DATA : []).map(normalize);
  const publishedKey = () => JSON.stringify(sortList(published));
  let working = null;
  const isOwner = () => store.get(SESSION_KEY, true) === '1';
  async function loadWorking() {
    let w = await DB.get('kv', 'working');
    if (!Array.isArray(w)) {
      const legacy = store.get('articlesWorking');           // from the earlier version of this page
      if (legacy) { try { w = JSON.parse(legacy); } catch (e) { w = null; } store.del('articlesWorking'); }
    }
    working = Array.isArray(w) ? w.map(normalize) : clone(published);
    return working;
  }
  const currentList = () => sortList(isOwner() ? (working || clone(published)) : published);
  const exportable = () => sortList((working || clone(published)).filter(a => !a.draft));
  const hasUnpublished = () => isOwner() && JSON.stringify(exportable()) !== publishedKey();
  let saveTimer = 0;
  function persist() { return DB.put('kv', 'working', working); }

  /* ---------- pictures ---------- */
  const urls = new Map();       // picture id -> address the page can show (a local copy for the owner, or the file on the website)
  async function ensureUrls(a) {
    for (const im of a.images) {
      if (urls.has(im.id)) continue;
      if (isOwner()) { const rec = await DB.get('img', im.id); if (rec && rec.blob) { urls.set(im.id, URL.createObjectURL(rec.blob)); continue; } }
    }
  }
  const imgSrc = (a, id) => { const im = a.images.find(x => x.id === id); return im ? (urls.get(id) || im.file) : ''; };
  async function loadBitmap(file) {
    try { return await createImageBitmap(file, { imageOrientation: 'from-image' }); } catch (e) { /* fall back below */ }
    try { return await createImageBitmap(file); } catch (e) { /* fall back below */ }
    return new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = URL.createObjectURL(file); });
  }
  // shrink big photos and save them as light JPEG files, so the website stays fast
  async function processImage(file) {
    if (!/^image\/(jpeg|png|webp|gif|bmp)$/i.test(file.type)) throw new Error('type');
    const bmp = await loadBitmap(file);
    const bw = bmp.width || bmp.naturalWidth, bh = bmp.height || bmp.naturalHeight;
    const sc = Math.min(1, 1600 / Math.max(bw, bh)), w = Math.max(1, Math.round(bw * sc)), h = Math.max(1, Math.round(bh * sc));
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, w, h); x.drawImage(bmp, 0, 0, w, h);
    if (bmp.close) bmp.close();
    let blob = await new Promise(r => c.toBlob(r, 'image/jpeg', .82));
    if (blob && blob.size > 1.6e6) blob = await new Promise(r => c.toBlob(r, 'image/jpeg', .7));
    if (!blob) throw new Error('encode');
    return { blob, w, h };
  }

  /* ---------- a tiny .zip writer (one download holds articles-data.js and all the pictures, no folders) ---------- */
  const CRC_T = (() => { const tb = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; tb[n] = c >>> 0; } return tb; })();
  const crc32 = u8 => { let c = 0xFFFFFFFF; for (let i = 0; i < u8.length; i++) c = CRC_T[(c ^ u8[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
  function makeZip(files) {
    const enc = new TextEncoder(), parts = [], central = [];
    let offset = 0; const d = new Date();
    const dosTime = (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1), dosDate = ((d.getFullYear() - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate();
    files.forEach(f => {
      const name = enc.encode(f.name), crc = crc32(f.data), size = f.data.length;
      const lh = new DataView(new ArrayBuffer(30));
      lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint16(8, 0, true); lh.setUint16(10, dosTime, true); lh.setUint16(12, dosDate, true);
      lh.setUint32(14, crc, true); lh.setUint32(18, size, true); lh.setUint32(22, size, true); lh.setUint16(26, name.length, true); lh.setUint16(28, 0, true);
      parts.push(lh.buffer, name, f.data);
      const ch = new DataView(new ArrayBuffer(46));
      ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true); ch.setUint16(10, 0, true); ch.setUint16(12, dosTime, true); ch.setUint16(14, dosDate, true);
      ch.setUint32(16, crc, true); ch.setUint32(20, size, true); ch.setUint32(24, size, true); ch.setUint16(28, name.length, true); ch.setUint32(42, offset, true);
      central.push(ch.buffer, name);
      offset += 30 + name.length + size;
    });
    const cdSize = central.reduce((s, p) => s + p.byteLength, 0);
    const end = new DataView(new ArrayBuffer(22));
    end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true); end.setUint32(12, cdSize, true); end.setUint32(16, offset, true);
    return new Blob([...parts, ...central, end.buffer], { type: 'application/zip' });
  }

  /* ---------- Markdown: reading (safe), and turning stories into editor blocks and back ---------- */
  function inline(s) {
    let x = esc(s);
    x = x.replace(/`([^`]+)`/g, '<code>$1</code>');
    x = x.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    x = x.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>');
    x = x.replace(/\[([^\]]+)\]\(((?:https?:\/\/|mailto:)[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    return x;
  }
  const IMG_LINE = /^!\[([^\]]*)\]\(([^)\s]+)\)\s*$/;
  function figure(a, alt, ref) {
    let src = '', cap = alt;
    if (/^img:/.test(ref)) { const id = ref.slice(4); src = a ? imgSrc(a, id) : ''; const im = a && a.images.find(x => x.id === id); if (!cap && im) cap = im.alt; }
    else if (/^https?:\/\//.test(ref)) src = ref;
    if (!src) return '';
    return '<figure><a href="' + esc(src) + '" target="_blank" rel="noopener"><img src="' + esc(src) + '" alt="' + esc(cap) + '" loading="lazy" /></a>' + (cap ? '<figcaption>' + esc(cap) + '</figcaption>' : '') + '</figure>';
  }
  function render(md, a) {
    const lines = String(md).replace(/\r/g, '').split('\n'), out = [];
    let i = 0;
    while (i < lines.length) {
      const l = lines[i];
      if (/^```/.test(l)) { const code = []; i++; while (i < lines.length && !/^```/.test(lines[i])) { code.push(lines[i]); i++; } i++; out.push('<pre><code>' + esc(code.join('\n')) + '</code></pre>'); continue; }
      if (IMG_LINE.test(l)) {
        const figs = []; while (i < lines.length && IMG_LINE.test(lines[i])) { const m = lines[i].match(IMG_LINE); figs.push(figure(a, m[1], m[2])); i++; }
        const ok = figs.filter(Boolean); if (ok.length) out.push('<div class="gal g' + Math.min(ok.length, 4) + '">' + ok.join('') + '</div>'); continue;
      }
      let m;
      if ((m = l.match(/^(#{1,3})\s+(.*)$/))) { const lvl = Math.max(2, m[1].length); out.push('<h' + lvl + '>' + inline(m[2]) + '</h' + lvl + '>'); i++; continue; }
      if (/^\s*[-*]\s+/.test(l)) { const it = []; while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) { it.push('<li>' + inline(lines[i].replace(/^\s*[-*]\s+/, '')) + '</li>'); i++; } out.push('<ul>' + it.join('') + '</ul>'); continue; }
      if (/^\s*\d+[.)]\s+/.test(l)) { const it = []; while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) { it.push('<li>' + inline(lines[i].replace(/^\s*\d+[.)]\s+/, '')) + '</li>'); i++; } out.push('<ol>' + it.join('') + '</ol>'); continue; }
      if (/^>\s?/.test(l)) { const q = []; while (i < lines.length && /^>\s?/.test(lines[i])) { q.push(lines[i].replace(/^>\s?/, '')); i++; } out.push('<blockquote>' + inline(q.join(' ')) + '</blockquote>'); continue; }
      if (!l.trim()) { i++; continue; }
      const p = []; while (i < lines.length && lines[i].trim() && !/^(```|#{1,3}\s|\s*[-*]\s|\s*\d+[.)]\s|>|!\[)/.test(lines[i])) { p.push(lines[i]); i++; }
      if (!p.length) { p.push(lines[i]); i++; }
      out.push('<p>' + inline(p.join(' ')) + '</p>');
    }
    return out.join('\n');
  }
  // markdown text -> list of editor blocks: {type, md?, code?, id?, alt?, url?}
  function parseBlocks(md) {
    const lines = String(md).replace(/\r/g, '').split('\n'), out = [];
    let i = 0;
    while (i < lines.length) {
      const l = lines[i]; let m;
      if (/^```/.test(l)) { const code = []; i++; while (i < lines.length && !/^```/.test(lines[i])) { code.push(lines[i]); i++; } i++; out.push({ type: 'code', code: code.join('\n') }); continue; }
      if ((m = l.match(IMG_LINE))) { out.push(/^img:/.test(m[2]) ? { type: 'img', id: m[2].slice(4) } : { type: 'img', url: m[2], alt: m[1] }); i++; continue; }
      if ((m = l.match(/^(#{1,3})\s+(.*)$/))) { out.push({ type: m[1].length >= 3 ? 'h3' : 'h2', md: m[2] }); i++; continue; }
      if (/^\s*[-*]\s+/.test(l)) { out.push({ type: 'li', md: l.replace(/^\s*[-*]\s+/, '') }); i++; continue; }
      if (/^\s*\d+[.)]\s+/.test(l)) { out.push({ type: 'oli', md: l.replace(/^\s*\d+[.)]\s+/, '') }); i++; continue; }
      if (/^>\s?/.test(l)) { out.push({ type: 'quote', md: l.replace(/^>\s?/, '') }); i++; continue; }
      if (!l.trim()) { i++; continue; }
      const p = []; while (i < lines.length && lines[i].trim() && !/^(```|#{1,3}\s|\s*[-*]\s|\s*\d+[.)]\s|>|!\[)/.test(lines[i])) { p.push(lines[i]); i++; }
      if (!p.length) { p.push(lines[i]); i++; }
      out.push({ type: 'p', md: p.join(' ') });
    }
    return out;
  }
  function domToMd(node) {
    let s = '';
    node.childNodes.forEach(n => {
      if (n.nodeType === 3) { s += n.nodeValue.replace(/ /g, ' '); return; }
      if (n.nodeType !== 1) return;
      const inner = domToMd(n), tag = n.tagName;
      if (!inner.trim()) { s += tag === 'BR' ? ' ' : inner; return; }
      if (tag === 'STRONG' || tag === 'B') s += '**' + inner.trim() + '**' + (/\s$/.test(inner) ? ' ' : '');
      else if (tag === 'EM' || tag === 'I') s += '*' + inner.trim() + '*' + (/\s$/.test(inner) ? ' ' : '');
      else if (tag === 'CODE') s += '`' + inner + '`';
      else if (tag === 'A') { const h = n.getAttribute('href') || ''; s += /^(https?:|mailto:)/.test(h) ? '[' + inner + '](' + h + ')' : inner; }
      else if (tag === 'BR') s += ' ';
      else s += inner;
    });
    return s;
  }

  /* ---------- writing helpers (work offline; Byte uses them) ---------- */
  const STOP = new Set('the and for that with this from have are was were but not you your our their they them then than when what which will would there here about into over also just more most some such only very can could should because while where been being has had its his her him she how why who out off any all one two use used using like make made get got let lets its'.split(' '));
  const wordCount = s => { const kh = (s.match(/[ក-៿]/g) || []).length; const lat = (s.match(/[A-Za-z0-9'’]+/g) || []).length; return lat + Math.round(kh / 6); };
  const sentences = p => (p.match(/[^.!?។]+[.!?។]+["')\]]*\s*|[^.!?។]+$/g) || [p]).map(x => x.trim()).filter(Boolean);
  function analyze(md, meta) {
    const blocks = parseBlocks(md);
    const heads = blocks.map((b, i) => ({ b, i })).filter(x => x.b.type === 'h2' || x.b.type === 'h3');
    const paras = blocks.filter(b => b.type === 'p');
    const firstHead = blocks.findIndex(b => b.type === 'h2' || b.type === 'h3');
    const introText = blocks.slice(0, firstHead < 0 ? blocks.length : firstHead).filter(b => b.type === 'p').map(b => b.md).join(' ');
    const lastHead = heads.length ? heads[heads.length - 1].b.md : '';
    const tail = paras.length ? paras[paras.length - 1].md : '';
    const endRe = /conclusion|summary|final|takeaway|wrap|next step|lessons?|what i learned|in short|ចប់|សន្និដ្ឋាន|សង្ខេប|មេរៀន|បន្ទាប់/i;
    const longParas = paras.filter(p => wordCount(p.md) > 110).length;
    const pics = blocks.filter(b => b.type === 'img').length;
    return {
      words: wordCount(md), mins: Math.max(1, Math.round(wordCount(md) / 200)), sections: heads.length, pics, longParas, heads: blocks.map((b, i) => ({ b, i })).filter(x => x.b.type === 'h2' || x.b.type === 'h3').map(x => ({ level: x.b.type === 'h3' ? 3 : 2, text: x.b.md, index: x.i })),
      checks: [
        ['ckIntro', wordCount(introText) >= 12 && (firstHead < 0 ? paras.length >= 1 : firstHead > 0)],
        ['ckSections', heads.filter(h => h.b.type === 'h2').length >= 2],
        ['ckEnd', endRe.test(lastHead) || (heads.length > 1 && endRe.test(tail.slice(0, 60)))],
        ['ckShort', paras.length > 0 && longParas === 0],
        ['ckSub', !!(meta && meta.sub && meta.sub.trim())],
        ['ckTags', !!(meta && meta.tags && meta.tags.length)],
        ['ckPic', pics > 0 || !!(meta && meta.cover)]
      ]
    };
  }
  // tidy a rough draft: paragraphs, headings, lists, picture groups
  function organizeMd(md) {
    const stat = { split: 0, heads: 0, lists: 0 };
    let text = String(md).replace(/\r/g, '').replace(/\t/g, '  ').split('\n').map(l => l.replace(/\s+$/, '')).join('\n');
    text = text.replace(/^\s*[•▪‣◦·–—]\s+/gm, '- ').replace(/^\s*\*\s+/gm, '- ').replace(/^(\s*\d+)\)\s+/gm, '$1. ');
    const lines = text.split('\n'), blocks = [];
    let i = 0;
    while (i < lines.length) {
      if (/^```/.test(lines[i])) { const c = [lines[i]]; i++; while (i < lines.length && !/^```/.test(lines[i])) { c.push(lines[i]); i++; } if (i < lines.length) { c.push(lines[i]); i++; } blocks.push({ k: 'code', lines: c }); continue; }
      if (!lines[i].trim()) { i++; continue; }
      const b = []; while (i < lines.length && lines[i].trim() && !/^```/.test(lines[i])) { b.push(lines[i]); i++; }
      blocks.push({ k: 'text', lines: b });
    }
    const out = [];
    blocks.forEach((blk, bi) => {
      if (blk.k === 'code') { out.push(blk.lines.join('\n')); return; }
      const ls = blk.lines;
      if (ls.every(x => IMG_LINE.test(x.trim()))) { out.push(ls.map(x => x.trim()).join('\n')); stat.lists++; return; }
      if (ls.every(x => /^\s*[-*]\s+/.test(x)) || ls.every(x => /^\s*\d+[.)]\s+/.test(x))) { out.push(ls.join('\n')); stat.lists++; return; }
      if (ls.length === 1) {
        const one = ls[0].trim(); const nextBlk = blocks[bi + 1];
        const isHead = /^#{1,3}\s/.test(one);
        if (isHead) { out.push(one.replace(/^#{1,3}\s+/, '## ')); return; }
        if (one.length <= 70 && !/[.!?។;,]$/.test(one) && nextBlk && nextBlk.k === 'text' && !/^(#|>|!\[|- |\d+\. )/.test(one) && wordCount(one) <= 9 && bi > 0) { out.push('## ' + one.replace(/[:：]$/, '')); stat.heads++; return; }
      }
      if (ls.some(x => /^(#{1,3}\s|>|!\[|\s*[-*]\s|\s*\d+[.)]\s)/.test(x))) { out.push(ls.join('\n')); return; }
      const para = ls.map(x => x.trim()).join(' ').replace(/\s{2,}/g, ' ');
      if (wordCount(para) > 100) {
        const ss = sentences(para); let cur = [], w = 0; const groups = [];
        ss.forEach(sn => { cur.push(sn); w += wordCount(sn); if (w >= 55 || cur.length >= 4) { groups.push(cur.join(' ')); cur = []; w = 0; } });
        if (cur.length) groups.push(cur.join(' '));
        if (groups.length > 1) { stat.split++; groups.forEach(g => out.push(g)); return; }
      }
      out.push(para);
    });
    // lists and picture groups keep their lines together; everything else is separated by a blank line
    return { md: out.join('\n\n').replace(/\n{3,}/g, '\n\n').trim(), stat };
  }
  const TPL = {
    en: {
      essay: ['Introduction', 'First main point', 'Second main point', 'Third main point', 'Conclusion'],
      how: ['The goal', 'What you need', 'Steps', 'The result', 'Tips'],
      project: ['Overview', 'The problem', 'What I built', 'What I learned', 'What is next'],
      reflect: ['What happened', 'How I felt', 'What I learned', 'What I will do next'],
      ref: ['What it is', 'Key points', 'Example', 'Useful links', 'Notes']
    },
    km: {
      essay: ['ការណែនាំ', 'ចំណុចសំខាន់ទីមួយ', 'ចំណុចសំខាន់ទីពីរ', 'ចំណុចសំខាន់ទីបី', 'សន្និដ្ឋាន'],
      how: ['គោលដៅ', 'អ្វីដែលត្រូវការ', 'ជំហាន', 'លទ្ធផល', 'គន្លឹះ'],
      project: ['ទិដ្ឋភាពទូទៅ', 'បញ្ហា', 'អ្វីដែលខ្ញុំបានបង្កើត', 'អ្វីដែលខ្ញុំបានរៀន', 'អ្វីបន្ទាប់'],
      reflect: ['អ្វីបានកើតឡើង', 'ខ្ញុំមានអារម្មណ៍យ៉ាងណា', 'អ្វីដែលខ្ញុំបានរៀន', 'អ្វីដែលខ្ញុំនឹងធ្វើបន្ទាប់'],
      ref: ['វាជាអ្វី', 'ចំណុចសំខាន់ៗ', 'ឧទាហរណ៍', 'តំណមានប្រយោជន៍', 'កំណត់ចំណាំ']
    }
  };
  const tplBlocks = (kind, lang) => TPL[lang === 'km' ? 'km' : 'en'][kind].flatMap((h, i, arr) => [{ type: 'h2', md: h }, { type: kind === 'how' && i === 2 ? 'oli' : 'p', md: '' }]);
  function suggest(md, meta) {
    const blocks = parseBlocks(md), first = blocks.find(b => b.type === 'h2' || b.type === 'h3');
    const paras = blocks.filter(b => b.type === 'p' && b.md.trim());
    const firstSent = paras.length ? sentences(paras[0].md)[0] : '';
    let title = first ? first.md : firstSent; title = title.replace(/[.!?។]+$/, '').slice(0, 64);
    let sumParts = paras.length ? sentences(paras[0].md) : [];
    if (!first && title && sumParts.length && sumParts[0].replace(/[.!?។]+$/, '').slice(0, 64) === title) sumParts = sumParts.slice(1).concat(paras[1] ? sentences(paras[1].md) : []);
    const sumSrc = sumParts.slice(0, 2).join(' '); const summary = sumSrc.length > 200 ? sumSrc.slice(0, 197).replace(/\s+\S*$/, '') + '...' : sumSrc;
    const freq = new Map(); (md.toLowerCase().match(/[a-z][a-z'-]{3,}/g) || []).forEach(w => { if (!STOP.has(w)) freq.set(w, (freq.get(w) || 0) + 1); });
    const tags = [...freq.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 4).map(x => x[0]);
    return { title, summary, tags };
  }
  function localReply(q) {
    const low = q.toLowerCase(), tips = t().byLocalTips;
    for (const [keys, ans] of tips) if (keys.some(k => low.includes(k))) return ans;
    return t().byFallback;
  }

  /* ---------- optional real AI (only the owner, key kept on this device) ---------- */
  const AI = {
    async key() { if (!isOwner()) throw new Error('owner only'); return DB.get('kv', 'aiKey'); },
    async model() { return (await DB.get('kv', 'aiModel')) || 'claude-sonnet-5'; },
    async ask(system, user, max) {
      const key = await this.key(); if (!key) throw new Error('no key');
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-access': 'true' },
        body: JSON.stringify({ model: await this.model(), max_tokens: max || 2000, system, messages: [{ role: 'user', content: user }] })
      });
      const j = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error((j.error && j.error.message) || ('HTTP ' + res.status));
      return (j.content || []).map(c => c.text || '').join('').trim();
    }
  };
  const AI_SYS = 'You are Byte, a friendly writing helper for a student developer who writes short personal and technical articles in Markdown. Keep the author\'s own meaning and voice. Never invent facts. Keep every picture line that starts with "![" exactly as it is. Use "## " for section headings, short paragraphs, and "- " lists where they help. Reply with only what was asked for.';

  /* ---------- pages ---------- */
  const app = $('#app');
  let filterTag = '', query = '', sortMode = 'new', shown = PAGE;
  const setTitle = s => { document.title = (s ? s + ' | ' : '') + t().title + ' | Doryco Chorng'; };
  const fmtDatePart = { months: ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'] };
  const kmDigits = n => String(n).replace(/\d/g, d => '០១២៣៤៥៦៧៨៩'[d]);
  function fmtDate(d) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d); if (!m) return d;
    if (LANG === 'km') return kmDigits(+m[3]) + ' ' + fmtDatePart.months[+m[2] - 1] + ' ' + kmDigits(m[1]);
    try { return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(d + 'T00:00:00')); } catch (e) { return d; }
  }
  const pick = (a, f) => (LANG === 'km' && a[f + 'Km'] ? a[f + 'Km'] : a[f]);
  function readMin(a) { const text = pick(a, 'body'); return Math.max(1, Math.round(wordCount(text) / 200)); }
  const avatarHtml = (a, cls) => '<span class="' + (cls || 'art-av') + '" style="--bc:' + a.color + '">' + BA.art(a.avatar) + '</span>';
  const haystack = a => (a.title + ' ' + a.titleKm + ' ' + a.summary + ' ' + a.summaryKm + ' ' + a.body + ' ' + a.bodyKm + ' ' + a.tags.join(' ')).toLowerCase();

  async function showList() {
    const list = currentList();
    if (isOwner()) for (const a of list.slice(0, shown)) await ensureUrls(a);
    const tagCount = new Map(); list.forEach(a => a.tags.forEach(x => tagCount.set(x, (tagCount.get(x) || 0) + 1)));
    const tags = [...tagCount.keys()].sort();
    const matches = sortList(list, sortMode).filter(a => (!filterTag || a.tags.includes(filterTag)) && (!query || haystack(a).includes(query.toLowerCase())));
    const view = matches.slice(0, shown);
    setTitle('');
    let h = '<section class="a-hero"><span class="label">' + esc(t().articles) + '</span><h1>' + esc(t().title) + '</h1><p>' + esc(t().sub) + '</p>';
    h += '<div class="a-tools"><label class="a-search"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg><input id="q" type="search" placeholder="' + esc(t().search) + '" value="' + esc(query) + '" aria-label="' + esc(t().search) + '" /></label>' +
      '<select id="sortSel" class="a-sort" aria-label="Sort"><option value="new"' + (sortMode === 'new' ? ' selected' : '') + '>' + esc(t().sortNew) + '</option><option value="old"' + (sortMode === 'old' ? ' selected' : '') + '>' + esc(t().sortOld) + '</option><option value="az"' + (sortMode === 'az' ? ' selected' : '') + '>' + esc(t().sortAz) + '</option></select>' +
      '<span class="a-count">' + esc(t().count(matches.length)) + '</span></div>';
    if (tags.length) h += '<div class="a-tags" role="group"><button type="button" class="tag' + (!filterTag ? ' on' : '') + '" data-tag="">' + esc(t().all) + '</button>' + tags.map(x => '<button type="button" class="tag' + (filterTag === x ? ' on' : '') + '" data-tag="' + esc(x) + '">#' + esc(x) + ' <small>' + tagCount.get(x) + '</small></button>').join('') + '</div>';
    h += '</section>';
    if (!view.length) {
      const empty = !list.length;
      h += '<div class="a-empty"><span class="art-av big" style="--bc:' + COLORS[0] + '">' + BA.art('panda') + '</span><h3>' + esc(empty ? t().empty : t().noMatch) + '</h3>' + (empty ? '<p>' + esc(t().emptyHint) + '</p>' : '') + '</div>';
    } else {
      h += '<div class="a-grid">' + view.map((a, i) => {
        const cover = a.cover ? imgSrc(a, a.cover) : '';
        return '<a class="art-card" href="#/a/' + encodeURIComponent(a.id) + '" style="--c:' + a.color + ';--i:' + (i % PAGE) + '">' +
          '<div class="art-cover' + (cover ? ' has-img' : '') + '">' + (cover ? '<img src="' + esc(cover) + '" alt="" loading="lazy" />' : '') + avatarHtml(a, 'art-av' + (cover ? ' chip' : '')) + (a.draft ? '<span class="draft-badge">' + esc(t().draft) + '</span>' : '') + '</div>' +
          '<div class="art-body"><div class="art-mini">' + a.tags.slice(0, 3).map(x => '<span>#' + esc(x) + '</span>').join('') + '</div>' +
          '<h3>' + esc(pick(a, 'title') || '(untitled)') + '</h3><p>' + esc(pick(a, 'summary')) + '</p>' +
          '<div class="art-meta"><span>' + esc(fmtDate(a.date)) + '</span><i></i><span>' + readMin(a) + ' ' + esc(t().min) + '</span></div></div></a>';
      }).join('') + '</div>';
      if (matches.length > shown) h += '<div class="a-more"><button type="button" class="ob-btn" id="moreBtn">' + esc(t().more) + ' (' + (matches.length - shown) + ')</button></div>';
    }
    app.innerHTML = h;
    const q = $('#q'); if (q) q.addEventListener('input', () => { query = q.value; shown = PAGE; const pos = q.selectionStart; showList().then(() => { const n = $('#q'); if (n) { n.focus(); n.setSelectionRange(pos, pos); } }); });
    $('#sortSel').addEventListener('change', e => { sortMode = e.target.value; shown = PAGE; showList(); });
    $$('.a-tags .tag').forEach(b => b.addEventListener('click', () => { filterTag = b.dataset.tag; shown = PAGE; showList(); }));
    const mb = $('#moreBtn'); if (mb) mb.addEventListener('click', () => { shown += PAGE; showList(); });
  }

  async function showArticle(id) {
    const list = currentList(), a = list.find(x => x.id === id);
    if (!a) {
      setTitle(t().notFound);
      app.innerHTML = '<div class="a-empty"><span class="art-av big" style="--bc:' + COLORS[3] + '">' + BA.art('bunny') + '</span><h3>' + esc(t().notFound) + '</h3><p>' + esc(t().notFoundHint) + '</p><a class="btn solid" href="#/">' + esc(t().list) + '</a></div>';
      return;
    }
    if (isOwner()) await ensureUrls(a);
    setTitle(pick(a, 'title'));
    const own = isOwner(), i = list.findIndex(x => x.id === id), older = list[i + 1], newer = list[i - 1];
    const cover = a.cover && pick(a, 'body').indexOf('img:' + a.cover) < 0 ? imgSrc(a, a.cover) : '';
    app.innerHTML = '<article class="a-read" style="--c:' + a.color + '">' +
      '<a class="a-back" href="#/">&larr; ' + esc(t().list) + '</a>' +
      '<header class="a-head"><div class="a-head-av">' + avatarHtml(a, 'art-av big') + '</div><div>' +
      '<div class="art-mini">' + a.tags.map(x => '<span>#' + esc(x) + '</span>').join('') + (a.draft ? '<span class="draft-badge inline">' + esc(t().draft) + '</span>' : '') + '</div>' +
      '<h1>' + esc(pick(a, 'title')) + '</h1><p class="a-sum">' + esc(pick(a, 'summary')) + '</p>' +
      '<div class="art-meta"><span>' + esc(t().by) + '</span><i></i><span>' + esc(fmtDate(a.date)) + '</span><i></i><span>' + readMin(a) + ' ' + esc(t().min) + '</span></div></div></header>' +
      (cover ? '<figure class="a-cover"><img src="' + esc(cover) + '" alt="" /></figure>' : '') +
      '<div class="a-prose">' + render(pick(a, 'body'), a) + '</div>' +
      '<footer class="a-actions"><button type="button" class="ob-btn" id="shareBtn">' + esc(t().share) + '</button>' +
      (own ? '<button type="button" class="ob-btn primary" id="editBtn">' + esc(t().edit) + '</button><button type="button" class="ob-btn danger" id="delBtn">' + esc(t().del) + '</button>' : '') + '</footer>' +
      ((older || newer) ? '<nav class="a-pn">' + (older ? '<a href="#/a/' + encodeURIComponent(older.id) + '"><small>' + esc(t().prev) + '</small><span>' + esc(pick(older, 'title')) + '</span></a>' : '<span></span>') + (newer ? '<a class="r" href="#/a/' + encodeURIComponent(newer.id) + '"><small>' + esc(t().next) + '</small><span>' + esc(pick(newer, 'title')) + '</span></a>' : '<span></span>') + '</nav>' : '') + '</article>';
    $('#shareBtn').addEventListener('click', () => {
      const url = location.href.split('#')[0] + '#/a/' + encodeURIComponent(a.id);
      (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(() => toast(t().copied), () => { window.prompt(t().share, url); });
    });
    if (own) {
      $('#editBtn').addEventListener('click', () => openEditor(a.id));
      $('#delBtn').addEventListener('click', () => deleteArticle(a.id));
    }
  }
  async function deleteArticle(id) {
    if (!confirm(t().delConfirm)) return;
    const a = working.find(x => x.id === id);
    if (a) for (const im of a.images) { await DB.del('img', im.id); urls.delete(im.id); }
    working = working.filter(x => x.id !== id); await persist(); toast(t().deleted); refreshOwnerBar();
    if (location.hash === '#/') route(); else location.hash = '#/';
  }
  async function route() {
    const m = location.hash.match(/^#\/a\/(.+)$/);
    if (m) await showArticle(decodeURIComponent(m[1])); else await showList();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  window.addEventListener('hashchange', route);

  /* ---------- owner: login ---------- */
  const hexToBytes = h => new Uint8Array(h.match(/../g).map(x => parseInt(x, 16)));
  const bytesToHex = b => [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
  async function derive(user, pass) {
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey('raw', enc.encode(user.trim().toLowerCase() + '\n' + pass), 'PBKDF2', false, ['deriveBits']);
    const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt: hexToBytes(OWNER.salt), iterations: OWNER.iter, hash: 'SHA-256' }, key, 256);
    return bytesToHex(bits);
  }
  const sameHex = (a, b) => { if (a.length !== b.length) return false; let d = 0; for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i); return d === 0; };
  let fails = 0, lockedUntil = 0;
  function modal(html, cls) {
    const host = $('#modalRoot');
    host.innerHTML = '<div class="a-modal' + (cls ? ' ' + cls : '') + '" role="dialog" aria-modal="true"><div class="a-modal-box">' + html + '</div></div>';
    const m = $('.a-modal', host); requestAnimationFrame(() => m.classList.add('open')); return m;
  }
  function closeModal() { const m = $('.a-modal'); if (!m) return; m.classList.remove('open'); setTimeout(() => { $('#modalRoot').innerHTML = ''; }, 200); }
  window.addEventListener('keydown', e => { if (e.key === 'Escape' && $('.a-modal')) closeModal(); });
  function openLogin() {
    const m = modal('<h2>' + esc(t().loginTitle) + '</h2><p class="m-hint">' + esc(t().loginHint) + '</p>' +
      '<form id="loginForm" autocomplete="off"><label>' + esc(t().user) + '<input id="lgUser" type="text" autocomplete="username" autocapitalize="none" spellcheck="false" required /></label>' +
      '<label>' + esc(t().pass) + '<input id="lgPass" type="password" autocomplete="current-password" required /></label>' +
      '<p class="m-err" id="lgErr" role="alert" hidden></p>' +
      '<div class="m-btns"><button type="button" class="ob-btn ghost" id="lgCancel">' + esc(t().cancel) + '</button><button type="submit" class="ob-btn primary" id="lgGo">' + esc(t().signIn) + '</button></div></form>', 'login');
    const err = $('#lgErr'); const show = s => { err.textContent = s; err.hidden = !s; };
    $('#lgCancel').addEventListener('click', closeModal); m.addEventListener('click', e => { if (e.target === m) closeModal(); });
    $('#lgUser').focus();
    $('#loginForm').addEventListener('submit', async e => {
      e.preventDefault();
      const now = Date.now();
      if (now < lockedUntil) { show(t().loginLocked(Math.ceil((lockedUntil - now) / 1000))); return; }
      if (!(window.crypto && crypto.subtle)) { show(t().loginNoCrypto); return; }
      const go = $('#lgGo'); go.disabled = true;
      try {
        const h = await derive($('#lgUser').value, $('#lgPass').value);
        if (sameHex(h, OWNER.hash)) { store.set(SESSION_KEY, '1', true); fails = 0; closeModal(); await loadWorking(); applyOwner(); await route(); toast(t().ownerMode); }
        else { fails++; $('#lgPass').value = ''; if (fails >= 5) { lockedUntil = Date.now() + 60000; fails = 0; show(t().loginLocked(60)); } else show(t().loginFail); }
      } catch (er) { show(t().loginNoCrypto); }
      go.disabled = false;
    });
  }

  /* ---------- owner: bar and publishing ---------- */
  function applyOwner() {
    const own = isOwner();
    document.body.classList.toggle('is-owner', own);
    $('#ownerBar').hidden = !own; $('#ownerBtn').classList.toggle('on', own);
    $('#ownerBtn').setAttribute('aria-label', own ? t().ownerMode : t().owner); $('#ownerBtn').title = own ? t().ownerMode : t().owner;
    if (own) refreshOwnerBar();
  }
  function refreshOwnerBar() {
    if (!isOwner()) return;
    $('#obTitle').textContent = t().ownerMode; $('#obNew').textContent = '+ ' + t().newArticle; $('#obExport').textContent = t().export;
    $('#obDiscard').textContent = t().discard; $('#obLogout').textContent = t().logout;
    const dirty = hasUnpublished(), st = $('#obStatus');
    st.textContent = dirty ? t().unpub : t().synced; st.className = 'ob-status ' + (dirty ? 'warn' : 'ok');
    $('#obExport').classList.toggle('pulse', dirty);
    DB.get('kv', 'working').then(w => { $('#obDiscard').hidden = !Array.isArray(w); });
  }
  $('#ownerBtn').addEventListener('click', () => { if (isOwner()) $('#ownerBar').scrollIntoView({ behavior: 'smooth', block: 'nearest' }); else openLogin(); });
  $('#obNew').addEventListener('click', () => openEditor(null));
  $('#obLogout').addEventListener('click', async () => { store.del(SESSION_KEY, true); working = null; applyOwner(); await route(); toast(t().logoutDone); });
  $('#obDiscard').addEventListener('click', async () => {
    if (!confirm(t().discardConfirm)) return;
    await DB.del('kv', 'working'); await DB.clear('img'); urls.forEach(u => { try { URL.revokeObjectURL(u); } catch (e) { /* ignore */ } }); urls.clear();
    working = clone(published); refreshOwnerBar(); await route(); toast(t().discarded);
  });
  $('#obExport').addEventListener('click', async () => {
    const list = exportable(), files = [];
    const text = '/* Published articles. This file is what every visitor sees.\n   To publish changes: log in on the articles page and press "Publish (download .zip)".\n   Unzip the download into your website folder (replace this file) and upload it. */\nwindow.ARTICLES_DATA = ' + JSON.stringify(list, null, 2) + ';\n';
    files.push({ name: 'articles-data.js', data: new TextEncoder().encode(text) });
    const seen = new Set();
    for (const a of list) for (const im of a.images) {
      if (seen.has(im.file)) continue; seen.add(im.file);
      const rec = await DB.get('img', im.id);
      if (rec && rec.blob) files.push({ name: im.file, data: new Uint8Array(await rec.blob.arrayBuffer()) });
    }
    const url = URL.createObjectURL(makeZip(files));
    const a = document.createElement('a'); a.href = url; a.download = 'articles-update.zip'; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    const help = $('#obHelp'); help.textContent = t().exportHelp; help.hidden = false;
  });

  /* ---------- owner: the Medium-style editor ---------- */
  async function openEditor(id) {
    if (!isOwner()) return;
    if (!working) await loadWorking();
    let a = id ? working.find(x => x.id === id) : null;
    const isNew = !a;
    if (isNew) a = normalize({ id: 'a' + uid(), date: new Date().toISOString().slice(0, 10), draft: true, avatar: BA.STYLES[Math.floor(Math.random() * BA.STYLES.length)], color: COLORS[Math.floor(Math.random() * COLORS.length)] });
    await ensureUrls(a);
    let lang = 'en', created = !isNew, previewOn = false, dirty = false, undoStack = [];
    const sfx = () => (lang === 'km' ? 'Km' : '');
    const buddyStyle = store.get('botStyle'), buddyColor = store.get('botColor') || COLORS[0];
    const buddy = { style: BA.STYLES.includes(buddyStyle) ? buddyStyle : 'robot', color: buddyColor, name: (store.get('botName') || '').trim() || BA.DEFAULT_NAME[BA.STYLES.includes(buddyStyle) ? buddyStyle : 'robot'] };

    const host = $('#modalRoot');
    host.innerHTML =
      '<div class="mz" role="dialog" aria-modal="true" aria-label="Story editor">' +
      '<header class="mz-top"><button type="button" class="mz-close" id="mzClose" aria-label="Close">&larr;</button>' +
        '<span class="mz-status"><b id="mzMode"></b><i id="mzSaved"></i></span>' +
        '<span class="mz-langs" role="tablist"><button type="button" role="tab" data-lg="en" aria-selected="true">English</button><button type="button" role="tab" data-lg="km" aria-selected="false" lang="km">ខ្មែរ</button></span>' +
        '<span class="mz-actions"><button type="button" class="mz-btn" id="mzPrevBtn"></button><button type="button" class="mz-btn" id="mzDetBtn"></button><button type="button" class="mz-btn byte" id="mzByteBtn"><span class="by-mini" style="--bc:' + buddy.color + '">' + BA.art(buddy.style) + '</span><span id="mzByteLbl"></span></button><button type="button" class="mz-done" id="mzDone"></button></span></header>' +
      '<div class="mz-shell"><main class="mz-page" id="mzPage">' +
        '<textarea id="mzTitle" class="mz-title" rows="1" maxlength="140"></textarea>' +
        '<textarea id="mzSub" class="mz-sub" rows="1" maxlength="260"></textarea>' +
        '<div class="mz-blocks" id="mzBlocks"></div><div class="mz-preview a-prose" id="mzPreview" hidden></div>' +
        '<p class="mz-hint" id="mzHint"></p>' +
      '</main>' +
      '<aside class="mz-side" id="mzSide" hidden>' +
        '<div class="by-head"><span class="by-av" style="--bc:' + buddy.color + '">' + BA.art(buddy.style) + '</span><div><b id="byName"></b><small id="bySub"></small></div></div>' +
        '<div class="by-meter" id="byMeter"></div><ul class="by-outline" id="byOutline"></ul>' +
        '<div class="by-actions" id="byActions"></div><div class="by-msgs" id="byMsgs" aria-live="polite"></div>' +
        '<form class="by-ask" id="byAsk" autocomplete="off"><input id="byIn" type="text" maxlength="300" /><button type="submit" aria-label="Send"><svg viewBox="0 0 24 24"><path d="M4 12 20 4l-4 16-4-7z"/></svg></button></form>' +
        '<div class="by-ai" id="byAi"></div>' +
      '</aside></div>' +
      '<div class="mz-float" id="mzFloat" hidden><button type="button" data-c="bold" title="Bold"><b>B</b></button><button type="button" data-c="italic" title="Italic"><i>I</i></button><button type="button" data-c="link" title="Link">&#128279;</button><span class="sep"></span><button type="button" data-c="h2" title="Heading">H</button><button type="button" data-c="h3" title="Subheading">h</button><button type="button" data-c="quote" title="Quote">&ldquo;</button></div>' +
      '<div class="mz-plus" id="mzPlus" hidden><button type="button" class="mz-plus-btn" id="mzPlusBtn" aria-label="Add">+</button><div class="mz-menu" id="mzMenu" hidden></div></div>' +
      '<div class="mz-drop" id="mzDrop" hidden></div>' +
      '<div class="mz-details" id="mzDetails" hidden></div>' +
      '<input type="file" id="mzFile" accept="image/*" multiple hidden />' +
      '</div>';
    const Z = { root: $('.mz', host), title: $('#mzTitle'), sub: $('#mzSub'), blocks: $('#mzBlocks'), prev: $('#mzPreview'), float: $('#mzFloat'), plus: $('#mzPlus'), menu: $('#mzMenu'), drop: $('#mzDrop'), file: $('#mzFile'), det: $('#mzDetails'), side: $('#mzSide') };
    requestAnimationFrame(() => Z.root.classList.add('open'));
    document.body.classList.add('mz-open');

    /* --- labels --- */
    function labels() {
      const L = t();
      $('#mzClose').setAttribute('aria-label', L.edClose); $('#mzPrevBtn').textContent = previewOn ? L.edWrite : L.edPreview; $('#mzDetBtn').textContent = L.edDetails;
      $('#mzByteLbl').textContent = buddy.name; $('#mzDone').textContent = L.edDone;
      Z.title.placeholder = L.phTitle; Z.sub.placeholder = L.phSub; $('#mzHint').textContent = ''; $('#byName').textContent = buddy.name; $('#bySub').textContent = L.bySub; $('#byIn').placeholder = L.byAsk;
      $$('.mz-langs button').forEach(b => b.setAttribute('aria-selected', String(b.dataset.lg === lang)));
      $$('.blk-t[data-type="p"]', Z.blocks).forEach(x => { x.dataset.ph = L.phBody; });
      $$('.blk-img input', Z.blocks).forEach(x => { x.placeholder = L.phCaption; });
      modeLabel();
    }
    function modeLabel() { $('#mzMode').textContent = a.draft ? t().draftMode : t().ready; $('#mzMode').className = a.draft ? 'draft' : 'ready'; }

    /* --- blocks --- */
    let focusedBlk = null;
    function autosize(el) { el.style.height = 'auto'; el.style.height = el.scrollHeight + 'px'; }
    function imgRec(id) { return a.images.find(i => i.id === id); }
    function makeBlock(b) {
      const wrap = document.createElement('div');
      if (b.type === 'code') {
        wrap.className = 'blk blk-code'; wrap.dataset.type = 'code';
        const ta = document.createElement('textarea'); ta.value = b.code || ''; ta.spellcheck = false; ta.rows = 3; ta.placeholder = '// code';
        ta.addEventListener('input', () => { autosize(ta); changed(); }); ta.addEventListener('focus', () => { focusedBlk = wrap; updatePlus(); });
        ta.addEventListener('keydown', e => { if (e.key === 'Backspace' && !ta.value) { e.preventDefault(); const p = wrap.previousElementSibling; wrap.remove(); (p ? focusEnd(p) : addPara()); changed(); } });
        wrap.appendChild(ta); setTimeout(() => autosize(ta), 0); return wrap;
      }
      if (b.type === 'img') {
        wrap.className = 'blk blk-img'; wrap.dataset.type = 'img'; wrap.contentEditable = 'false';
        const rec = b.id ? imgRec(b.id) : null;
        if (b.id) wrap.dataset.id = b.id; else wrap.dataset.url = b.url;
        const src = b.id ? (rec ? (urls.get(b.id) || rec.file) : '') : b.url;
        wrap.innerHTML = '<div class="img-frame"><img alt="" draggable="false" /><div class="img-tools"><button type="button" data-a="cover"></button><button type="button" data-a="del"></button></div></div><input type="text" maxlength="200" />';
        $('img', wrap).src = src;
        const cap = $('input', wrap); cap.placeholder = t().phCaption; cap.value = b.id ? (rec ? rec.alt : '') : (b.alt || '');
        cap.addEventListener('input', () => { if (b.id && rec) rec.alt = cap.value; else wrap.dataset.alt = cap.value; changed(); });
        cap.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); const n = wrap.nextElementSibling; if (n) focusStart(n); else addPara(); } });
        $$('.img-tools button', wrap).forEach(btn => btn.addEventListener('click', () => {
          if (btn.dataset.a === 'del') { removeImageBlock(wrap); }
          else { a.cover = a.cover === wrap.dataset.id ? '' : (wrap.dataset.id || ''); refreshImgTools(); changed(); }
        }));
        wrap.addEventListener('click', e => { if (!e.target.closest('input,button')) { focusedBlk = wrap; $$('.blk-img', Z.blocks).forEach(x => x.classList.toggle('sel', x === wrap)); } });
        return wrap;
      }
      wrap.className = 'blk'; wrap.dataset.type = b.type;
      const tx = document.createElement('div'); tx.className = 'blk-t'; tx.contentEditable = 'true'; tx.dataset.type = b.type; tx.spellcheck = true;
      tx.innerHTML = inline(b.md || '').replace(/&amp;amp;/g, '&amp;');
      if (b.type === 'p') tx.dataset.ph = t().phBody;
      tx.addEventListener('focus', () => { focusedBlk = wrap; updatePlus(); });
      tx.addEventListener('input', () => { shortcuts(wrap, tx); changed(); updatePlus(); });
      tx.addEventListener('keydown', e => blockKey(e, wrap, tx));
      tx.addEventListener('paste', e => blockPaste(e, wrap, tx));
      wrap.appendChild(tx); return wrap;
    }
    const textOf = wrap => $('.blk-t', wrap);
    function focusStart(wrap) { const x = textOf(wrap) || $('textarea,input', wrap); if (x) { x.focus(); if (x.isContentEditable) { const r = document.createRange(); r.selectNodeContents(x); r.collapse(true); const s = getSelection(); s.removeAllRanges(); s.addRange(r); } } }
    function focusEnd(wrap) { const x = textOf(wrap) || $('textarea,input', wrap); if (x) { x.focus(); if (x.isContentEditable) { const r = document.createRange(); r.selectNodeContents(x); r.collapse(false); const s = getSelection(); s.removeAllRanges(); s.addRange(r); } } }
    function addPara(after, html) {
      const w = makeBlock({ type: 'p', md: '' }); const tx = textOf(w); if (html) tx.innerHTML = html;
      if (after && after.parentNode) after.after(w); else Z.blocks.appendChild(w); focusStart(w); return w;
    }
    function insertBlocksAfter(ref, list) {
      let cur = ref;
      list.forEach(b => { const w = makeBlock(b); if (cur && cur.parentNode) cur.after(w); else Z.blocks.appendChild(w); cur = w; });
      return cur;
    }
    function renumber() { let n = 0; $$('.blk', Z.blocks).forEach(w => { if (w.dataset.type === 'oli') { n++; w.dataset.n = n + '.'; } else n = 0; }); }
    function convert(wrap, type) {
      const tx = textOf(wrap); if (!tx) return;
      wrap.dataset.type = type; tx.dataset.type = type; if (type === 'p') tx.dataset.ph = t().phBody; else delete tx.dataset.ph;
      renumber(); tx.focus(); changed();
    }
    function shortcuts(wrap, tx) {
      if (wrap.dataset.type !== 'p') return;
      const txt = tx.textContent.replace(/ /g, ' ');
      const map = [[/^##\s$/, 'h2'], [/^###\s$/, 'h3'], [/^[-*]\s$/, 'li'], [/^1[.)]\s$/, 'oli'], [/^>\s$/, 'quote']];
      for (const [re, type] of map) if (re.test(txt)) { tx.innerHTML = ''; convert(wrap, type); return; }
    }
    function caretInfo(tx) {
      const s = getSelection(); if (!s.rangeCount) return { atStart: false, atEnd: false, collapsed: true };
      const r = s.getRangeAt(0); const pre = document.createRange(); pre.selectNodeContents(tx); pre.setEnd(r.startContainer, r.startOffset);
      const post = document.createRange(); post.selectNodeContents(tx); post.setStart(r.endContainer, r.endOffset);
      return { atStart: r.collapsed && pre.toString().length === 0, atEnd: r.collapsed && post.toString().length === 0, collapsed: r.collapsed, range: r };
    }
    function blockKey(e, wrap, tx) {
      const type = wrap.dataset.type, ci = caretInfo(tx);
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'b') { e.preventDefault(); document.execCommand('bold'); changed(); return; }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'i') { e.preventDefault(); document.execCommand('italic'); changed(); return; }
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (tx.textContent.trim() === '```') { tx.innerHTML = ''; const cb = makeBlock({ type: 'code', code: '' }); wrap.after(cb); wrap.remove(); $('textarea', cb).focus(); changed(); return; }
        if (type === 'li' || type === 'oli') { if (!tx.textContent.trim()) { convert(wrap, 'p'); return; } }
        // split at the caret
        let restHtml = '';
        if (ci.range) { const r = ci.range.cloneRange(); r.setEndAfter(tx.lastChild || tx); if (tx.lastChild) { const frag = r.extractContents(); const d = document.createElement('div'); d.appendChild(frag); restHtml = d.innerHTML; } }
        const nextType = (type === 'li' || type === 'oli') ? type : (type === 'quote' ? 'quote' : 'p');
        const nb = makeBlock({ type: nextType, md: '' }); textOf(nb).innerHTML = restHtml; wrap.after(nb);
        if (nextType === 'oli') renumber(); focusStart(nb); changed(); updatePlus(); return;
      }
      if (e.key === 'Backspace' && ci.collapsed && ci.atStart) {
        e.preventDefault();
        if (type !== 'p') { convert(wrap, 'p'); return; }
        const prev = wrap.previousElementSibling;
        if (!prev) return;
        if (textOf(prev)) { const ptx = textOf(prev); const len = ptx.childNodes.length; ptx.insertAdjacentHTML('beforeend', tx.innerHTML); wrap.remove(); ptx.focus(); const r = document.createRange(); r.selectNodeContents(ptx); r.collapse(false); const s = getSelection(); s.removeAllRanges(); s.addRange(r); void len; }
        else if (!tx.textContent.trim()) { wrap.remove(); prev.classList.add('sel'); focusedBlk = prev; }
        changed(); updatePlus(); return;
      }
      if (e.key === 'ArrowUp' && ci.atStart) { const p = wrap.previousElementSibling; if (p) { e.preventDefault(); focusEnd(p); } else { e.preventDefault(); Z.sub.focus(); } }
      if (e.key === 'ArrowDown' && ci.atEnd) { const n = wrap.nextElementSibling; if (n) { e.preventDefault(); focusStart(n); } }
    }
    function blockPaste(e, wrap, tx) {
      const files = [...(e.clipboardData && e.clipboardData.files || [])].filter(f => /^image\//.test(f.type));
      if (files.length) { e.preventDefault(); uploadFiles(files, wrap); return; }
      const text = e.clipboardData ? e.clipboardData.getData('text/plain') : '';
      e.preventDefault();
      if (text.trim().split('\n').length > 1) {
        const list = parseBlocks(/```/.test(text) ? text : text.replace(/\r/g, '').replace(/\n(?!\n)/g, '\n\n')); if (!list.length) return;
        const empty = !tx.textContent.trim(); const last = insertBlocksAfter(wrap, list); if (empty) wrap.remove(); renumber(); focusEnd(last); changed(); return;
      }
      document.execCommand('insertText', false, text.replace(/\s*\n\s*/g, ' '));
    }

    /* --- the floating toolbar for selected text --- */
    let linkMode = false;
    function updateFloat() {
      const s = getSelection();
      if (previewOn || !s.rangeCount || s.isCollapsed || !Z.blocks.contains(s.anchorNode) || !s.anchorNode.parentElement.closest('.blk-t')) { if (!linkMode) Z.float.hidden = true; return; }
      const r = s.getRangeAt(0).getBoundingClientRect(); if (!r.width && !r.height) return;
      Z.float.hidden = false;
      const w = Z.float.offsetWidth || 240; Z.float.style.left = Math.max(8, Math.min(innerWidth - w - 8, r.left + r.width / 2 - w / 2)) + 'px'; Z.float.style.top = Math.max(60, r.top - 48) + 'px';
    }
    document.addEventListener('selectionchange', updateFloat);
    Z.float.addEventListener('mousedown', e => e.preventDefault());
    Z.float.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return; const c = b.dataset.c;
      const s = getSelection(), blk = s.anchorNode && s.anchorNode.parentElement && s.anchorNode.parentElement.closest('.blk');
      if (c === 'bold' || c === 'italic') { document.execCommand(c); changed(); }
      else if (c === 'link') {
        const saved = s.getRangeAt(0).cloneRange(); linkMode = true;
        Z.float.innerHTML = '<input type="text" placeholder="' + esc(t().linkPh) + '" /><button type="button" data-c="close">&times;</button>';
        const inp = $('input', Z.float); inp.focus();
        const done = () => { linkMode = false; Z.float.innerHTML = FLOAT_HTML; Z.float.hidden = true; };
        inp.addEventListener('keydown', ev => { if (ev.key === 'Enter') { ev.preventDefault(); let u = inp.value.trim(); if (u && !/^(https?:|mailto:)/.test(u)) u = 'https://' + u; const sel = getSelection(); sel.removeAllRanges(); sel.addRange(saved); if (/^(https?:|mailto:)/.test(u)) document.execCommand('createLink', false, u); done(); changed(); } if (ev.key === 'Escape') done(); });
        Z.float.addEventListener('click', ev => { if (ev.target.closest('[data-c="close"]')) done(); }, { once: true });
        return;
      } else if (blk && (c === 'h2' || c === 'h3' || c === 'quote')) { convert(blk, blk.dataset.type === c ? 'p' : c); Z.float.hidden = true; }
    });
    const FLOAT_HTML = Z.float.innerHTML;

    $('#mzPage').addEventListener('scroll', () => { updatePlus(); updateFloat(); }, { passive: true });
    /* --- the + button on empty lines --- */
    function menuItems() {
      const L = t();
      return [['img', L.addImage, '&#128444;'], ['h2', L.addH2, 'H'], ['h3', L.addH3, 'h'], ['quote', L.addQuote, '&ldquo;'], ['li', L.addList, '&#8226;'], ['oli', L.addNum, '1.'], ['code', L.addCode, '&lt;/&gt;']];
    }
    function updatePlus() {
      const w = focusedBlk;
      if (!w || previewOn || w.dataset.type !== 'p' || (textOf(w) && textOf(w).textContent.trim())) { Z.plus.hidden = true; Z.menu.hidden = true; return; }
      const r = w.getBoundingClientRect(), pr = Z.root.getBoundingClientRect(); Z.plus.hidden = false;
      const page = $('#mzPage').getBoundingClientRect();
      Z.plus.style.top = (r.top - pr.top + 2) + 'px'; Z.plus.style.left = Math.max(4, r.left - pr.left - 44) + 'px'; void page;
    }
    $('#mzPlusBtn').addEventListener('mousedown', e => e.preventDefault());
    $('#mzPlusBtn').addEventListener('click', () => {
      if (!Z.menu.hidden) { Z.menu.hidden = true; return; }
      Z.menu.innerHTML = menuItems().map(m => '<button type="button" data-k="' + m[0] + '"><span>' + m[2] + '</span>' + esc(m[1]) + '</button>').join(''); Z.menu.hidden = false;
    });
    Z.menu.addEventListener('mousedown', e => e.preventDefault());
    Z.menu.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b || !focusedBlk) return; const k = b.dataset.k, at = focusedBlk; Z.menu.hidden = true;
      if (k === 'img') { Z.file._target = at; Z.file.click(); }
      else if (k === 'code') { const cb = makeBlock({ type: 'code', code: '' }); at.after(cb); at.remove(); $('textarea', cb).focus(); changed(); }
      else convert(at, k);
      updatePlus();
    });

    /* --- pictures: pick, drag, paste --- */
    async function uploadFiles(files, at) {
      const list = [...files].filter(f => /^image\//.test(f.type)); if (!list.length) { toast(t().badImage); return; }
      const hint = $('#mzHint'); hint.textContent = t().uploading; let added = 0, cur = at || focusedBlk || Z.blocks.lastElementChild, empty = cur && cur.dataset.type === 'p' && textOf(cur) && !textOf(cur).textContent.trim() ? cur : null;
      for (const f of list) {
        try {
          const { blob, w, h } = await processImage(f);
          const id = uid(), file = 'art-' + id + '.jpg', alt = f.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim();
          await DB.put('img', id, { blob, name: file, w, h }); urls.set(id, URL.createObjectURL(blob));
          a.images.push({ id, file, alt: '', w, h }); void alt;
          cur = insertBlocksAfter(cur, [{ type: 'img', id }]); added++;
        } catch (e) { toast(t().badImage); }
      }
      if (empty && added) empty.remove();
      hint.textContent = ''; if (added) { toast(t().imgAdded(added)); if (!a.cover) { const first = a.images[0]; if (first) a.cover = first.id; } refreshImgTools(); changed(); renderDetails(); }
      const nxt = cur && cur.nextElementSibling; if (!nxt) addPara(cur);
      if (!DB.ok) toast(t().noStorage);
    }
    Z.file.addEventListener('change', () => { const at = Z.file._target; uploadFiles(Z.file.files, at); Z.file.value = ''; });
    async function removeImageBlock(w) {
      const id = w.dataset.id; w.remove();
      if (id) { const still = $$('.blk-img', Z.blocks).some(x => x.dataset.id === id); if (!still) { a.images = a.images.filter(i => i.id !== id); if (a.cover === id) a.cover = ''; await DB.del('img', id); } }
      refreshImgTools(); changed(); renderDetails();
    }
    function refreshImgTools() {
      $$('.blk-img', Z.blocks).forEach(w => { const isC = !!w.dataset.id && a.cover === w.dataset.id; w.classList.toggle('is-cover', isC); const cb = $('[data-a="cover"]', w), db = $('[data-a="del"]', w); if (cb) { cb.textContent = isC ? '★ ' + t().isCover : t().asCover; cb.hidden = !w.dataset.id; } if (db) db.textContent = t().removeImg; });
    }
    let dragDepth = 0;
    Z.root.addEventListener('dragenter', e => { if ([...(e.dataTransfer.types || [])].includes('Files')) { dragDepth++; Z.drop.textContent = t().dropHere; Z.drop.hidden = false; } });
    Z.root.addEventListener('dragleave', () => { dragDepth = Math.max(0, dragDepth - 1); if (!dragDepth) Z.drop.hidden = true; });
    Z.root.addEventListener('dragover', e => { if ([...(e.dataTransfer.types || [])].includes('Files')) e.preventDefault(); });
    Z.root.addEventListener('drop', e => { dragDepth = 0; Z.drop.hidden = true; const fs = [...e.dataTransfer.files].filter(f => /^image\//.test(f.type)); if (fs.length) { e.preventDefault(); uploadFiles(fs, focusedBlk || Z.blocks.lastElementChild); } });

    /* --- reading the page into markdown, and loading markdown into the page --- */
    function serialize() {
      const out = []; let prevType = '';
      $$('.blk', Z.blocks).forEach(w => {
        const type = w.dataset.type; let line = '';
        if (type === 'code') { const v = $('textarea', w).value; if (!v.trim()) return; line = '```\n' + v.replace(/\s+$/, '') + '\n```'; }
        else if (type === 'img') { line = w.dataset.id ? '![](img:' + w.dataset.id + ')' : '![' + (w.dataset.alt || '') + '](' + w.dataset.url + ')'; }
        else { const md = domToMd(textOf(w)).replace(/\s+/g, ' ').trim(); if (!md) return; const n = w.dataset.n || '1.'; line = type === 'h2' ? '## ' + md : type === 'h3' ? '### ' + md : type === 'quote' ? '> ' + md : type === 'li' ? '- ' + md : type === 'oli' ? n + ' ' + md : md; }
        out.push((out.length ? ((type === prevType && (type === 'li' || type === 'oli' || type === 'img')) ? '\n' : '\n\n') : '') + line); prevType = type;
      });
      return out.join('');
    }
    function loadMd(md) {
      Z.blocks.innerHTML = ''; const list = parseBlocks(md); if (!list.length) list.push({ type: 'p', md: '' });
      list.forEach(b => Z.blocks.appendChild(makeBlock(b))); renumber(); refreshImgTools();
    }
    function loadLang() { Z.title.value = a['title' + sfx()]; Z.sub.value = a['summary' + sfx()]; loadMd(a['body' + sfx()]); [Z.title, Z.sub].forEach(autosize); labels(); byUpdate(); }
    function readLang() { a['title' + sfx()] = Z.title.value.trim(); a['summary' + sfx()] = Z.sub.value.trim(); a['body' + sfx()] = serialize(); }

    /* --- saving happens by itself --- */
    let st = 0;
    function changed() { dirty = true; $('#mzSaved').textContent = t().saving; clearTimeout(st); st = setTimeout(save, 600); byUpdateSoon(); }
    async function save() {
      readLang();
      const hasAny = a.title || a.summary || a.body || a.titleKm || a.bodyKm || a.images.length;
      if (!hasAny && !created) { $('#mzSaved').textContent = ''; return; }
      const idx = working.findIndex(x => x.id === a.id);
      const snap = normalize(clone(a));
      if (idx >= 0) working[idx] = snap; else { working.push(snap); created = true; }
      await persist(); dirty = false; $('#mzSaved').textContent = t().saved; refreshOwnerBar();
    }
    Z.title.addEventListener('input', () => { autosize(Z.title); changed(); });
    Z.sub.addEventListener('input', () => { autosize(Z.sub); changed(); });
    Z.title.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); Z.sub.focus(); } });
    Z.sub.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); const f = Z.blocks.firstElementChild; if (f) focusStart(f); } });

    /* --- top bar buttons --- */
    async function closeEditor() {
      clearTimeout(st); document.removeEventListener('selectionchange', updateFloat); await save();
      Z.root.classList.remove('open'); document.body.classList.remove('mz-open');
      setTimeout(() => { host.innerHTML = ''; }, 200);
      if (isNew && created) location.hash = '#/a/' + encodeURIComponent(a.id); else route();
    }
    $('#mzClose').addEventListener('click', closeEditor); $('#mzDone').addEventListener('click', closeEditor);
    window.addEventListener('keydown', function esc2(e) { if (!$('.mz')) { window.removeEventListener('keydown', esc2); return; } if (e.key === 'Escape' && Z.menu.hidden && !linkMode) closeEditor(); });
    $('#mzPrevBtn').addEventListener('click', () => {
      previewOn = !previewOn; readLang();
      if (previewOn) { const md = a['body' + sfx()]; Z.prev.innerHTML = md.trim() ? render(md, a) : '<p class="m-hint">' + esc(t().preEmpty) + '</p>'; }
      Z.blocks.hidden = previewOn; Z.prev.hidden = !previewOn; Z.title.readOnly = Z.sub.readOnly = previewOn; Z.plus.hidden = true; Z.float.hidden = true; labels();
    });
    $('#mzMode').addEventListener('click', () => { a.draft = !a.draft; modeLabel(); changed(); });
    $('#mzMode').setAttribute('role', 'button'); $('#mzMode').tabIndex = 0;
    $$('.mz-langs button').forEach(b => b.addEventListener('click', () => { readLang(); lang = b.dataset.lg; loadLang(); }));
    $('#mzDetBtn').addEventListener('click', () => { Z.det.hidden = !Z.det.hidden; if (!Z.det.hidden) renderDetails(); });
    $('#mzByteBtn').addEventListener('click', () => { Z.side.hidden = !Z.side.hidden; Z.root.classList.toggle('with-side', !Z.side.hidden); if (!Z.side.hidden) { byUpdate(); if (!$('#byMsgs').children.length) byMsg({ text: t().byHello }); } });
    document.addEventListener('click', function outside(e) { if (!$('.mz')) { document.removeEventListener('click', outside); return; } if (!Z.det.hidden && !e.target.closest('#mzDetails') && !e.target.closest('#mzDetBtn')) Z.det.hidden = true; if (!Z.menu.hidden && !e.target.closest('#mzPlus')) Z.menu.hidden = true; });

    /* --- details: tags, date, cover avatar, colour, pictures --- */
    function renderDetails() {
      if (Z.det.hidden) return;
      const L = t();
      Z.det.innerHTML = '<label>' + esc(L.dTags) + '<input id="dtTags" type="text" maxlength="80" placeholder="html, css, javascript" /></label><label>' + esc(L.dDate) + '<input id="dtDate" type="date" /></label>' +
        '<div class="dt-l">' + esc(L.dAvatar) + '</div><div class="ed-avs" id="dtAvs"></div><div class="dt-l">' + esc(L.dColor) + '</div><div class="ed-sw" id="dtSw"></div>' +
        '<div class="dt-l">' + esc(L.dPics) + '</div><div class="dt-pics" id="dtPics"></div>' +
        (created ? '<button type="button" class="ob-btn danger" id="dtDel">' + esc(L.dDelete) + '</button>' : '');
      $('#dtTags').value = a.tags.join(', '); $('#dtDate').value = a.date;
      $('#dtTags').addEventListener('input', e => { a.tags = e.target.value.split(',').map(x => x.trim().replace(/^#/, '')).filter(Boolean).slice(0, 8); changed(); });
      $('#dtDate').addEventListener('change', e => { if (e.target.value) { a.date = e.target.value; changed(); } });
      const avs = $('#dtAvs'), sw = $('#dtSw'); avs.style.setProperty('--bc', a.color);
      BA.STYLES.forEach(s => { const b = document.createElement('button'); b.type = 'button'; b.innerHTML = BA.art(s); b.setAttribute('aria-label', s); b.setAttribute('aria-pressed', String(s === a.avatar)); b.addEventListener('click', () => { a.avatar = s; changed(); renderDetails(); }); avs.appendChild(b); });
      COLORS.forEach(c => { const b = document.createElement('button'); b.type = 'button'; b.style.setProperty('--sw', c); b.setAttribute('aria-label', c); b.setAttribute('aria-pressed', String(c === a.color)); b.addEventListener('click', () => { a.color = c; changed(); renderDetails(); }); sw.appendChild(b); });
      const pics = $('#dtPics');
      if (!a.images.length) pics.innerHTML = '<p class="m-hint">' + esc(L.dNoPics) + '</p>';
      a.images.forEach(im => { const d = document.createElement('div'); d.className = 'dt-pic' + (a.cover === im.id ? ' cover' : ''); d.innerHTML = '<img alt="" src="' + esc(urls.get(im.id) || im.file) + '" /><button type="button">' + esc(a.cover === im.id ? '★ ' + L.isCover : L.asCover) + '</button>'; $('button', d).addEventListener('click', () => { a.cover = a.cover === im.id ? '' : im.id; refreshImgTools(); changed(); renderDetails(); }); pics.appendChild(d); });
      const del = $('#dtDel'); if (del) del.addEventListener('click', async () => { if (!confirm(t().delConfirm)) return; clearTimeout(st); document.removeEventListener('selectionchange', updateFloat); created = false; Z.root.classList.remove('open'); document.body.classList.remove('mz-open'); host.innerHTML = ''; await deleteArticle(a.id); });
    }

    /* --- Byte, the writing helper (this drawer exists only for the signed-in owner) --- */
    function meta() { return { sub: Z.sub.value, tags: a.tags, cover: a.cover }; }
    let meterT = 0; function byUpdateSoon() { clearTimeout(meterT); meterT = setTimeout(byUpdate, 250); }
    function byUpdate() {
      if (!$('#byMeter')) return; const L = t(), an = analyze(serialize(), meta());
      $('#byMeter').innerHTML = '<div class="by-stats"><span><b>' + an.words + '</b> ' + esc(L.byWords) + '</span><span><b>' + an.mins + '</b> ' + esc(L.byMins) + '</span><span><b>' + an.sections + '</b> ' + esc(L.bySections) + '</span><span><b>' + an.pics + '</b> ' + esc(L.byPics) + '</span></div>' +
        '<div class="by-checks">' + an.checks.map(c => '<span class="' + (c[1] ? 'ok' : '') + '">' + (c[1] ? '✓' : '○') + ' ' + esc(L[c[0]]) + '</span>').join('') + '</div>';
      $('#byOutline').innerHTML = an.heads.map(h => '<li class="l' + h.level + '"><button type="button" data-i="' + h.index + '">' + esc(h.text) + '</button></li>').join('');
      $$('#byOutline button').forEach(b => b.addEventListener('click', () => { const blocks = $$('.blk', Z.blocks); const idx = +b.dataset.i; const w = blocks[idx]; if (w) { w.scrollIntoView({ behavior: 'smooth', block: 'center' }); focusEnd(w); } }));
      const hasKey = byAiOn;
      $('#byActions').innerHTML = '';
      const acts = [['byOutline', byOutlinePick], ['byOrg', byOrganize], ['byCheck', byCheck], ['bySuggest', bySuggest]];
      acts.forEach(([k, fn]) => { const b = document.createElement('button'); b.type = 'button'; b.textContent = L[k]; b.addEventListener('click', fn); $('#byActions').appendChild(b); });
      [['byAiOrg', byAiOrganize], ['byAiImprove', byAiImprove], ['byAiTr', byAiTranslate]].forEach(([k, fn]) => { const b = document.createElement('button'); b.type = 'button'; b.className = 'ai' + (hasKey ? '' : ' off'); b.textContent = '✨ ' + L[k]; b.addEventListener('click', () => { if (!byAiOn) { byMsg({ text: t().byNoAi }); return; } fn(); }); $('#byActions').appendChild(b); });
      byRenderAi();
    }
    function byMsg(m, from) {
      const box = $('#byMsgs'); if (!box) return;
      const d = document.createElement('div'); d.className = 'by-msg ' + (from || 'byte'); const p = document.createElement('p'); p.textContent = m.text; d.appendChild(p);
      if (m.buttons && m.buttons.length) { const bs = document.createElement('div'); bs.className = 'by-mb'; m.buttons.forEach(b => { const x = document.createElement('button'); x.type = 'button'; x.textContent = b.label; x.addEventListener('click', () => { b.fn(); if (!b.keep) x.disabled = true; }); bs.appendChild(x); }); d.appendChild(bs); }
      if (m.lines) { const ul = document.createElement('ul'); m.lines.forEach(l => { const li = document.createElement('li'); li.textContent = l; ul.appendChild(li); }); d.appendChild(ul); }
      box.appendChild(d); box.scrollTop = box.scrollHeight; return d;
    }
    function applyMd(md, label) { undoStack.push(serialize()); loadMd(md); changed(); byMsg({ text: label, buttons: [{ label: t().undo, fn: () => { const prev = undoStack.pop(); if (prev != null) { loadMd(prev); changed(); } } }] }); }
    function byOutlinePick() {
      byMsg({ text: t().pickStruct, buttons: [['essay', 'tplEssay'], ['how', 'tplHow'], ['project', 'tplProject'], ['reflect', 'tplReflect'], ['ref', 'tplRef']].map(([k, lab]) => ({ label: t()[lab], keep: true, fn: () => {
        const cur = serialize(); const list = tplBlocks(k, lang); undoStack.push(cur);
        if (!cur.trim()) { Z.blocks.innerHTML = ''; list.forEach(b => Z.blocks.appendChild(makeBlock(b))); } else list.forEach(b => Z.blocks.appendChild(makeBlock(b)));
        renumber(); changed(); byMsg({ text: t().byInserted, buttons: [{ label: t().undo, fn: () => { const p = undoStack.pop(); if (p != null) { loadMd(p); changed(); } } }] });
        const first = $$('.blk[data-type="p"]', Z.blocks).find(w => !textOf(w).textContent.trim()); if (first) { first.scrollIntoView({ behavior: 'smooth', block: 'center' }); focusStart(first); }
      } })) });
    }
    function byOrganize() {
      const cur = serialize(); if (!cur.trim()) { byMsg({ text: t().byNothing }); return; }
      const r = organizeMd(cur);
      if (r.md === cur.trim()) { byMsg({ text: t().byOrgSame }); return; }
      applyMd(r.md, t().byOrgDone(r.stat.split, r.stat.heads, r.stat.lists));
    }
    function byCheck() {
      const L = t(), an = analyze(serialize(), meta());
      byMsg({ text: L.byChecked, lines: an.checks.map(c => (c[1] ? '✓ ' : '○ ') + L[c[0]]) });
    }
    function bySuggest() {
      const L = t(), s = suggest(serialize(), meta());
      const btns = [];
      if (s.title && !Z.title.value.trim()) btns.push({ label: L.apply + ': ' + L.byTitleIs, fn: () => { Z.title.value = s.title; autosize(Z.title); changed(); } });
      if (s.summary && !Z.sub.value.trim()) btns.push({ label: L.apply + ': ' + L.bySummaryIs, fn: () => { Z.sub.value = s.summary; autosize(Z.sub); changed(); } });
      if (s.tags.length) btns.push({ label: L.apply + ': ' + L.byTagsAre, fn: () => { a.tags = [...new Set(a.tags.concat(s.tags))].slice(0, 8); changed(); renderDetails(); } });
      byMsg({ text: L.bySuggested, lines: [L.byTitleIs + ': ' + (s.title || '-'), L.bySummaryIs + ': ' + (s.summary || '-'), L.byTagsAre + ': ' + (s.tags.join(', ') || '-')], buttons: btns });
    }
    let aiBusy = false;
    async function byAi(prompt, system, apply) {
      if (aiBusy) return; aiBusy = true; const wait = byMsg({ text: t().byThinking });
      try { const out = await AI.ask(system || AI_SYS, prompt, 3000); wait.remove(); apply(out); } catch (e) { wait.remove(); byMsg({ text: t().byAiFail + (e && e.message ? e.message : e) }); }
      aiBusy = false;
    }
    function byAiOrganize() { const cur = serialize(); if (!cur.trim()) { byMsg({ text: t().byNothing }); return; } byAi('Reorganize this article into a clear structure (introduction, sections with ## headings, short paragraphs, lists where useful, a short conclusion). Keep my meaning and voice and do not add new facts.\n\n' + cur, null, out => applyMd(out.replace(/^```(?:markdown)?\n?|```$/g, '').trim(), t().byOrgDone(0, 0, 0).replace(/ I split.*/, ' Reorganized with AI.'))); }
    function byAiImprove() { const cur = serialize(); if (!cur.trim()) { byMsg({ text: t().byNothing }); return; } byAi('Improve the wording of this article so it is clearer and smoother. Keep the structure and headings.\n\n' + cur, null, out => applyMd(out.replace(/^```(?:markdown)?\n?|```$/g, '').trim(), 'Improved the wording.')); }
    function byAiTranslate() { const cur = serialize(); if (!cur.trim()) { byMsg({ text: t().byNothing }); return; } const target = lang === 'km' ? 'English' : 'Khmer'; byAi('Translate this article into ' + target + '. Keep the Markdown structure.\n\n' + cur, null, out => { const other = lang === 'km' ? '' : 'Km'; a['body' + other] = out.replace(/^```(?:markdown)?\n?|```$/g, '').trim(); changed(); byMsg({ text: 'Translated. Open the ' + (lang === 'km' ? 'English' : 'Khmer') + ' tab to review it.' }); }); }
    $('#byAsk').addEventListener('submit', async e => {
      e.preventDefault(); const q = $('#byIn').value.trim(); if (!q) return; $('#byIn').value = ''; byMsg({ text: q }, 'you');
      if (!isOwner()) return;
      if (byAiOn) { byAi('The author is editing this article:\n\n' + serialize().slice(0, 6000) + '\n\nQuestion: ' + q, AI_SYS + ' Answer briefly.', out => byMsg({ text: out })); }
      else byMsg({ text: localReply(q) });
    });
    let byAiOn = false;
    async function byRenderAi() {
      byAiOn = !!(await DB.get('kv', 'aiKey')); const L = t(), box = $('#byAi'); if (!box) return;
      box.innerHTML = '<div class="ai-row"><span class="ai-dot ' + (byAiOn ? 'on' : '') + '"></span><b>' + esc(byAiOn ? L.aiOn : L.aiOff) + '</b></div>' +
        (byAiOn ? '<button type="button" class="ob-btn" id="aiForget">' + esc(L.aiForget) + '</button>' :
          '<form id="aiForm" class="ai-form"><input id="aiKey" type="password" autocomplete="off" placeholder="' + esc(L.aiKeyPh) + '" /><button type="submit" class="ob-btn primary">' + esc(L.aiSave) + '</button></form>') +
        '<small>' + esc(L.aiNote) + '</small>';
      const f = $('#aiForm'); if (f) f.addEventListener('submit', async ev => { ev.preventDefault(); const k = $('#aiKey').value.trim(); if (!k) return; await DB.put('kv', 'aiKey', k); await byRenderAi(); byUpdate(); byMsg({ text: L.aiSaved }); });
      const fg = $('#aiForget'); if (fg) fg.addEventListener('click', async () => { await DB.del('kv', 'aiKey'); await byRenderAi(); byUpdate(); byMsg({ text: L.aiGone }); });
    }
    byRenderAi();

    loadLang();
    Z.title.focus();
    window.__editor = { serialize, loadMd, uploadFiles: f => uploadFiles(f, focusedBlk || Z.blocks.lastElementChild) };   // (used by automated tests only)
  }

  /* ---------- theme, language and static text ---------- */
  function paintStatic() {
    const L = t();
    $('#lnkHome').textContent = L.home; $('#lnkArticles').textContent = L.articles; $('#footBack').textContent = L.back;
    $$('.lang-switch button').forEach(b => { b.setAttribute('aria-pressed', String(b.dataset.l === LANG)); b.textContent = LANG === 'km' ? (b.dataset.l === 'en' ? 'អង់គ្លេស' : 'ខ្មែរ') : (b.dataset.l === 'en' ? 'EN' : 'KH'); });
    applyOwner();
  }
  $$('.lang-switch button').forEach(b => b.addEventListener('click', () => { LANG = b.dataset.l; root.setAttribute('lang', LANG); store.set('lang', LANG); paintStatic(); route(); }));
  $('#themeBtn').addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next); store.set('theme', next);
    const tc = document.querySelector('meta[name="theme-color"]'); if (tc) tc.setAttribute('content', next === 'dark' ? '#0d1117' : '#f6f8fa');
  });
  window.addEventListener('scroll', () => $('#nav').classList.toggle('scrolled', scrollY > 30), { passive: true });
  window.__articlesApi = { render, organizeMd, analyze, suggest, parseBlocks, makeZip, crc32 };

  (async function init() {
    if (isOwner()) await loadWorking();
    paintStatic();
    await route();
  })();
})();
