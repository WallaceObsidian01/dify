const translation = {
  common: {
    welcome: '',
    appUnavailable: 'اپ در دسترس نیست',
    appUnknownError: 'اپ در دسترس نیست',
  },
  chat: {
    newChat: 'چت جدید',
    pinnedTitle: 'پین شده',
    unpinnedTitle: 'چت‌ها',
    newChatDefaultName: 'مکالمه جدید',
    resetChat: 'بازنشانی مکالمه',
    poweredBy: 'قدرت‌گرفته از',
    prompt: 'پیشنهاد',
    privatePromptConfigTitle: 'تنظیمات مکالمه',
    publicPromptConfigTitle: 'پیشنهاد اولیه',
    configStatusDes: 'قبل از شروع، می‌توانید تنظیمات مکالمه را تغییر دهید',
    configDisabled: 'تنظیمات جلسه قبلی برای این جلسه استفاده شده است.',
    startChat: 'شروع چت',
    privacyPolicyLeft: 'لطفاً ',
    privacyPolicyMiddle: 'سیاست حریم خصوصی',
    privacyPolicyRight: ' ارائه شده توسط توسعه‌دهنده اپ را بخوانید.',
    deleteConversation: {
      title: 'حذف مکالمه',
      content: 'آیا مطمئن هستید که می‌خواهید این مکالمه را حذف کنید؟',
    },
    tryToSolve: 'سعی کنید حل کنید',
    temporarySystemIssue: 'ببخشید، مشکل موقت سیستمی.',
    expand: 'باز کردن',
    collapse: 'بستن',
  },
  generation: {
    tabs: {
      create: 'یک‌بار اجرا کن',
      batch: 'اجرا به صورت گروهی',
      saved: 'ذخیره شده',
    },
    savedNoData: {
      title: 'شما هنوز نتیجه‌ای ذخیره نکرده‌اید!',
      description: 'شروع به تولید محتوا کنید و نتایج ذخیره شده خود را اینجا پیدا کنید.',
      startCreateContent: 'شروع به تولید محتوا',
    },
    title: 'تکمیل هوش مصنوعی',
    queryTitle: 'محتوای درخواست',
    completionResult: 'نتیجه تکمیل',
    queryPlaceholder: 'محتوای درخواست خود را بنویسید...',
    run: 'اجرا',
    copy: 'کپی',
    resultTitle: 'تکمیل هوش مصنوعی',
    noData: 'هوش مصنوعی آنچه را که می‌خواهید اینجا به شما می‌دهد.',
    csvUploadTitle: 'فایل CSV خود را اینجا بکشید و رها کنید، یا ',
    browse: 'جستجو',
    csvStructureTitle: 'فایل CSV باید با ساختار زیر مطابقت داشته باشد:',
    downloadTemplate: 'الگو را اینجا دانلود کنید',
    field: 'فیلد',
    batchFailed: {
      info: '{{num}} اجرای ناموفق',
      retry: 'تلاش مجدد',
      outputPlaceholder: 'محتوای خروجی وجود ندارد',
    },
    errorMsg: {
      empty: 'لطفاً محتوا را در فایل بارگذاری شده وارد کنید.',
      fileStructNotMatch: 'فایل CSV بارگذاری شده با ساختار مطابقت ندارد.',
      emptyLine: 'ردیف {{rowIndex}} خالی است',
      invalidLine: 'ردیف {{rowIndex}}: مقدار {{varName}} نمی‌تواند خالی باشد',
      moreThanMaxLengthLine: 'ردیف {{rowIndex}}: مقدار {{varName}} نمی‌تواند بیشتر از {{maxLength}} کاراکتر باشد',
      atLeastOne: 'لطفاً حداقل یک ردیف در فایل بارگذاری شده وارد کنید.',
    },
  },
}

export default translation
