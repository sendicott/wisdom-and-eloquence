import { ExternalLink, GraduationCap, Building, Users } from 'lucide-react';

export default function Authors() {
  const authors = [
    {
      name: "Robert Littlejohn",
      title: "Head of School, The Covenant School",
      image: "robert-littlejohn.jpg",
      bio: "Robert Littlejohn has served as Head of School at The Covenant School in Dallas, Texas since April of 2018. Previously, he served thirteen years as Head of School at Trinity Academy in Raleigh, North Carolina, four years as Vice President for Academic Affairs at Covenant College in Lookout Mountain, GA, and three years as a Distance Learning Director for the Minnesota State College and University System.",
      achievements: [
        "Authored two College Biology Laboratory texts",
        "Published 26 reports of original research in Ecology, Plant Physiology, Biochemistry, and Science Educational Theory",
        "Co-author of Wisdom and Eloquence: a Christian Paradigm for Classical Learning (Crossway Books)",
        "Founding Headmaster for New Covenant Schools in Virginia",
        "Founding Director and Publisher for the Society for Classical Learning"
      ],
      credentials: "Ordained Anglican cleric, father to three adult children, grandfather to six granddaughters"
    },
    {
      name: "Charles T. Evans",
      title: "Founder & Senior Partner, BetterSchools, LLC",
      image: "charles-evans.jpg",
      bio: "Charles T. Evans is the founder and senior partner of BetterSchools, LLC. In addition to his work as a private school management consultant, Evans also served for six years as the executive director of the Texas Private Schools Association.",
      achievements: [
        "Adjunct instructor at Peabody College at Vanderbilt University",
        "Instructor in the Van Lunen Fellowship for Christian School Management at Calvin College",
        "Six years as executive director of the Texas Private Schools Association",
        "Extensive experience in private school management consulting"
      ],
      credentials: "Currently lives in Austin, Texas"
    },
    {
      name: "Keith A. McCurdy",
      title: "President & Founder, Live Sturdy, LLC",
      image: "keith-mccurdy.jpg",
      bio: "Keith A. McCurdy is a Family and Parenting Educator and Consultant, as well as a Licensed Professional Counselor and Licensed Marriage and Family Therapist in the state of Virginia. He has worked with families, children, parents, and individuals for over 30 years in the field of mental health.",
      achievements: [
        "Developer of 'Raising Sturdy Kids' parenting retreats",
        "Regular contributor on BaseCamp Live podcast",
        "Featured on Circe Institute's 'The Commons' and 'Crosspolitic' podcasts",
        "Former Chairman of the Board at Faith Christian School",
        "National consultant and speaker to businesses, churches, and schools"
      ],
      credentials: "Master of Arts and Education Specialist degrees from James Madison University",
      website: "https://www.livesturdy.com/"
    }
  ];

  return (
    <section id="authors" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-6">
            Meet the Authors
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Three distinguished educators and thought leaders who bring decades of experience 
            in classical education, family counseling, and school leadership.
          </p>
        </div>

        <div className="space-y-16">
          {authors.map((author, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Author Image and Basic Info */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src={author.image}
                      alt={author.name}
                      className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-amber-100"
                    />
                    <h3 className="text-2xl font-serif font-bold text-slate-800 mb-2">
                      {author.name}
                    </h3>
                    <p className="text-amber-700 font-semibold mb-4">{author.title}</p>
                    {author.website && (
                      <a 
                        href={author.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Website
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Author Details */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="bg-gradient-to-br from-amber-50 to-slate-50 rounded-2xl p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-amber-600" />
                      Background
                    </h4>
                    <p className="text-slate-700 leading-relaxed">{author.bio}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-amber-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {author.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="text-slate-700 flex items-start"
                        >
                          <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                      <Building className="h-5 w-5 mr-2 text-amber-600" />
                      Credentials
                    </h4>
                    <p className="text-slate-700 leading-relaxed">{author.credentials}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}