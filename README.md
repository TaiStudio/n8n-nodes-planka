# n8n-nodes-planka

[![npm version](https://badge.fury.io/js/@taistudio%2Fn8n-nodes-planka.svg)](https://badge.fury.io/js/@taistudio%2Fn8n-nodes-planka)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

n8n community node for Planka - Open Source Project Management

## 🌟 Features

This n8n node allows you to integrate Planka with your n8n workflows, providing comprehensive project management capabilities:

- **🏢 Project Management**: Create, read, update, and delete projects
- **📋 Board Management**: Manage boards, lists, tags, and members
- **📝 Card Management**: Handle cards, tasks, comments, and attachments
- **👤 User Management**: User-related operations and permissions

## 🔧 Installation

### Option 1: Install from npm
```bash
npm install @taistudio/n8n-nodes-planka
```

### Option 2: Install from source
```bash
git clone https://github.com/TaiStudio/n8n-nodes-planka.git
cd n8n-nodes-planka
npm install
npm run build
```

## 🚀 Usage

1. **Install the node** using one of the methods above
2. **Restart n8n** to load the new node
3. **Configure Planka credentials**:
   - API URL (e.g., `https://your-planka-instance.com`)
   - API Token (from your Planka user settings)
4. **Use the node** in your workflows with the following resources:
   - Project operations
   - Board operations
   - Card operations
   - User operations

## 🔐 Authentication

The node uses API token authentication. To get your API token:

1. Log in to your Planka instance
2. Go to Settings → API
3. Generate a new API token
4. Use this token in the n8n credential configuration

## 🆕 Compatibility

### ✅ Planka 2.0.0-rc.4 Support
This version is **fully compatible** with Planka **2.0.0-rc.4** and includes:

- Updated API endpoints for the latest Planka version
- Support for new features introduced in 2.0.0-rc.4
- Backward compatibility with earlier Planka versions
- Enhanced error handling and validation

### Supported Planka Versions
- ✅ Planka 2.0.0-rc.4 (Recommended)
- ✅ Planka 1.x.x (Legacy support)

## 📚 Available Operations

### Project Resource
- `getAll`: List all projects
- `get`: Get a specific project
- `create`: Create a new project
- `update`: Update an existing project
- `delete`: Delete a project

### Board Resource
- `getAll`: List all boards in a project
- `get`: Get a specific board
- `create`: Create a new board
- `update`: Update an existing board
- `delete`: Delete a board

### Card Resource
- `getAll`: List all cards in a list
- `get`: Get a specific card
- `create`: Create a new card
- `update`: Update an existing card
- `delete`: Delete a card
- `addComment`: Add a comment to a card
- `addAttachment`: Add an attachment to a card

### User Resource
- `getAll`: List all users
- `get`: Get a specific user
- `getCurrent`: Get current user information

## 🐛 Troubleshooting

### Common Issues

1. **Authentication Errors**
   - Verify your API token is correct
   - Check that your Planka instance URL is accessible
   - Ensure the token has sufficient permissions

2. **API Version Mismatch**
   - Make sure you're using Planka 2.0.0-rc.4 or compatible version
   - Check your Planka instance version in Settings → About

3. **Connection Issues**
   - Verify network connectivity to your Planka instance
   - Check if there are any firewall restrictions
   - Ensure HTTPS is properly configured if using SSL

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [n8n](https://n8n.io/)
- [Planka](https://planka.app/)
- [Planka GitHub](https://github.com/plankanban/planka)
- [n8n Community Nodes](https://github.com/n8n-io/n8n-nodes-community)

## 📞 Support

If you encounter any issues or have questions:

- Create an issue on [GitHub Issues](https://github.com/TaiStudio/n8n-nodes-planka/issues)
- Contact the maintainer: tai.studio@outlook.fr

---

**Note**: This is a community-maintained node and is not officially supported by the n8n or Planka teams.
