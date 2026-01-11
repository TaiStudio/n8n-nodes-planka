# n8n-nodes-planka

[![version npm](https://badge.fury.io/js/@taistudio%2Fn8n-nodes-planka.svg.svg)](https://badge.fury.io/js/@taistudio%2Fn8n-nodes-planka.svg)
[![Licence : MIT](https://img.shields.io/badge/Licence-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Node communautaire n8n pour Planka - Gestion de Projet Open Source

## 🌟 Fonctionnalités

Ce node n8n vous permet d'intégrer Planka avec vos workflows n8n, offrant des capacités complètes de gestion de projet :

- **🏢 Gestion de Projet** : Créer, lire, mettre à jour et supprimer des projets
- **📋 Gestion de Tableau** : Gérer les tableaux, listes, étiquettes et membres
- **📝 Gestion de Carte** : Gérer les cartes, tâches, commentaires et pièces jointes
- **👤 Gestion d'Utilisateur** : Opérations liées aux utilisateurs et permissions

## 🔧 Installation

### Option 1 : Installer depuis npm
```bash
npm install @taistudio/n8n-nodes-planka
```

### Option 2 : Installer depuis la source
```bash
git clone https://github.com/TaiStudio/n8n-nodes-planka.git
cd n8n-nodes-planka
npm install
npm run build
```

## 🚀 Utilisation

1. **Installez le node** en utilisant une des méthodes ci-dessus
2. **Redémarrez n8n** pour charger le nouveau node
3. **Configurez les identifiants Planka** :
   - URL de l'API (ex: `https://votre-instance-planka.com`)
   - Jeton d'API (depuis les paramètres utilisateur de Planka)
4. **Utilisez le node** dans vos workflows avec les ressources suivantes :
   - Opérations de projet
   - Opérations de tableau
   - Opérations de carte
   - Opérations d'utilisateur

## 🔐 Authentification

Le node utilise l'authentification par jeton d'API. Pour obtenir votre jeton :

1. Connectez-vous à votre instance Planka
2. Allez dans Paramètres → API
3. Générez un nouveau jeton d'API
4. Utilisez ce jeton dans la configuration des identifiants n8n

## 🆕 Compatibilité

### ✅ Support de Planka 2.0.0-rc.4
Cette version est **entièrement compatible** avec Planka **2.0.0-rc.4** et inclut :

- Points d'accès API mis à jour pour la dernière version de Planka
- Support des nouvelles fonctionnalités introduites dans 2.0.0-rc.4
- Compatibilité descendante avec les versions antérieures de Planka
- Gestion améliorée des erreurs et validation

### Versions de Planka Supportées
- ✅ Planka 2.0.0-rc.4 (Recommandé)
- ✅ Planka 1.x.x (Support hérité)

## 📚 Opérations Disponibles

### Ressource Projet
- `getAll` : Lister tous les projets
- `get` : Obtenir un projet spécifique
- `create` : Créer un nouveau projet
- `update` : Mettre à jour un projet existant
- `delete` : Supprimer un projet

### Ressource Tableau
- `getAll` : Lister tous les tableaux d'un projet
- `get` : Obtenir un tableau spécifique
- `create` : Créer un nouveau tableau
- `update` : Mettre à jour un tableau existant
- `delete` : Supprimer un tableau

### Ressource Carte
- `getAll` : Lister toutes les cartes d'une liste
- `get` : Obtenir une carte spécifique
- `create` : Créer une nouvelle carte
- `update` : Mettre à jour une carte existante
- `delete` : Supprimer une carte
- `addComment` : Ajouter un commentaire à une carte
- `addAttachment` : Ajouter une pièce jointe à une carte

### Ressource Utilisateur
- `getAll` : Lister tous les utilisateurs
- `get` : Obtenir un utilisateur spécifique
- `getCurrent` : Obtenir les informations de l'utilisateur actuel

## 🐛 Dépannage

### Problèmes Courants

1. **Erreurs d'Authentification**
   - Vérifiez que votre jeton d'API est correct
   - Assurez-vous que l'URL de votre instance Planka est accessible
   - Vérifiez que le jeton a les permissions suffisantes

2. **Incompatibilité de Version API**
   - Assurez-vous d'utiliser Planka 2.0.0-rc.4 ou une version compatible
   - Vérifiez la version de votre instance Planka dans Paramètres → À propos

3. **Problèmes de Connexion**
   - Vérifiez la connectivité réseau vers votre instance Planka
   - Vérifiez s'il y a des restrictions de pare-feu
   - Assurez-vous que HTTPS est correctement configuré si vous utilisez SSL

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à soumettre une Pull Request.

1. Fork le dépôt
2. Créez votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Ajouter une fonctionnalité incroyable'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🔗 Liens

- [n8n](https://n8n.io/)
- [Planka](https://planka.app/)
- [Planka GitHub](https://github.com/plankanban/planka)
- [Nodes Communautaires n8n](https://github.com/n8n-io/n8n-nodes-community)

## 📞 Support

Si vous rencontrez des problèmes ou avez des questions :

- Créez une issue sur [GitHub Issues](https://github.com/TaiStudio/n8n-nodes-planka/issues)
- Contactez le mainteneur : tai.studio@outlook.fr

---

**Note** : Ceci est un node maintenu par la communauté et n'est pas officiellement supporté par les équipes n8n ou Planka.
