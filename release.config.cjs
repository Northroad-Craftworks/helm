const COMMIT_ANALYZER = [
    '@semantic-release/commit-analyzer',
    {
        preset: 'eslint'
    }
];

const RELEASE_NOTES_GENERATOR = [
    '@semantic-release/release-notes-generator',
    {
        preset: 'eslint'
    }
];

const CHANGELOG = [
    '@semantic-release/changelog',
    {
        changelogFile: 'CHANGELOG.md'
    }
]

const GITHUB = '@semantic-release/github';

const HELM = [
    'semantic-release-helm3',
    {
        chartPath: 'microservices',
        onlyUpdateVersion: true
    }
]


module.exports = {
    branches: [
        '+([0-9])?(.{+([0-9]),x}).x',
        'main',
        { name: 'next', prerelease: true }
    ],
    plugins: [
        COMMIT_ANALYZER,
        RELEASE_NOTES_GENERATOR,
        CHANGELOG,
        GITHUB,
        HELM
    ]
};
