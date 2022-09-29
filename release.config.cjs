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

const HELM = [
    'semantic-release-helm3',
    {
        chartPath: 'microservices',
        onlyUpdateVersion: true
    }
]

const GITHUB = '@semantic-release/github';


module.exports = {
    branches: [
        '+([0-9])?(.{+([0-9]),x}).x',
        'main',
        { name: 'next', prerelease: true }
    ],
    plugins: [
        COMMIT_ANALYZER,
        RELEASE_NOTES_GENERATOR,
        HELM,
        GITHUB
    ]
};
